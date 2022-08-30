import React, { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator, Alert } from 'react-native'
import axios from "axios"

import Header from "../Header/Header"
import Shop from "../ShopItem/Shop"
import styles from "./Styles";

const ShopList = ({navigation}) => {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchItems();
	},[]);

	const fetchItems = () => {
		axios.get("https://fortnite-api.theapinetwork.com/store/get")
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
			id={item.itemId}
			name={item.item.name}
			cost={item.store.cost}
			image={item.item.images.information}
			rarity={item.item.rarity}
			series={item.item.series}
		/>
	)

	const separator = () => (
		<View style={{alignSelf: "center", height: 5, width: "90%", backgroundColor: "#000"}}/>
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
					onRefresh={() => fetchItems()}
					refreshing={false}
					ItemSeparatorComponent={separator}
					horizontal={false}
					numColumns={2}
					initialNumToRender={2}
				/>
			}
		</View>
		)
}

export default ShopList;