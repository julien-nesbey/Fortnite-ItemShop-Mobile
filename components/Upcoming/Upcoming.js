import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native'
import Axios from "axios";

import styles from "../ShopList/Styles";

import Shop from "../ShopItem/Shop";
import Header from "../Header/Header";


const Upcoming = ({navigation}) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchItems();
	},[])

	const fetchItems = () => {
		Axios.get("https://fortnite-api.theapinetwork.com/upcoming/get")
		.then(res => {
			setItems(res.data.data)
		})
		.catch(error => Alert.alert("Fortnite", error))
		.finally(() => {
			setLoading(false)
		})
	}
	const renderShop = ({item}) => (
		<Shop
			name={item.item.name}
			cost={item.store?.cost || "??? "}
			image={item.item.images.information}			
			rarity={item.item.rarity}
			series={item.item.series}
			loading={loading}
		/>
	)

	const separator = () => (
		<View style={{alignSelf: "center", height: 5, width: "90%", backgroundColor: "#000"}}></View>
	)


	return(
		<View style={styles.container}>
			<Header onPress={() => navigation.push("Home")}/>
			{loading ? <ActivityIndicator animating={true} color="#f00" size="large" /> :
				<FlatList
					data={items}
					renderItem={renderShop}
					keyExtractor={(item) => item.itemId}
					showsVerticalScrollIndicator={false}
					onRefresh={() => fetchItems() }
					refreshing={false}
					ItemSeparatorComponent={separator}
					initialNumToRender={2}
					horizontal={false}
					numColumns={2}
				/>
			}
		</View>
		)
}


export default Upcoming