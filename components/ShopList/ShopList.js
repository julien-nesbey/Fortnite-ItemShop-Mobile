import React, { useState, useEffect } from 'react'
import { View, FlatList, StatusBar, ActivityIndicator, Alert } from 'react-native'
import axios from "axios"

import Header from "../Header/Header"
import Shop from "../ShopItem/Shop"
import styles from "./Styles";

const ShopList = () => {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchItems();
	},[])

	const fetchItems = () => {
		axios.get("https://fortnite-api.theapinetwork.com/store/get")
		.then(res => {
			StatusBar.setBackgroundColor("red", true)
			setItems(res.data.data)
		})
		.catch(error => console.log(error))
		.finally(() => {
			setLoading(false)
			StatusBar.setBackgroundColor("green",true)
		})
	}

	const renderShop = ({item}) => (
		<Shop
			name={item.item.name}
			cost={item.store.cost}
			image={item.item.images.information}
			isNew={item.store.isNew}
			rarity={item.item.rarity}
			loading={loading}
		/>
	)

	const separator = () => (
		<View style={{height: 5, width: "100%", backgroundColor: "#000"}}></View>
	)


	return(
		<View style={styles.container}>
			<Header />
			{loading ? <ActivityIndicator animating={true} color="#f00" size="large" /> :
				<FlatList
					data={items}
					renderItem={renderShop}
					keyExtractor={item => item.itemId}
					showsVerticalScrollIndicator={false}
					onRefresh={() => fetchItems() }
					refreshing={false}
					ItemSeparatorComponent={separator}
				/>
			}
		</View>
		)
}

export default ShopList