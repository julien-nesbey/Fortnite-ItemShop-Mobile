import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Header from "../Header/Header";
import axios from "axios";

import {Card, Title, Paragraph, Subheading, Divider, Avatar} from "react-native-paper";

const ItemDetails = ({navigation, route}) => {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const {id} = route.params;

	useEffect(() => {
		fetchItems();
	},[]);


	const fetchItems = () => {
		axios.get(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`)
		.then(res => {
			setItems(res.data.data)
		})
		.catch(error => Alert.alert("Fortnite", error))
		.finally(() => {
			setLoading(false)
		})
	}

	const generateColor = () => {
  		const randomColor = Math.floor(Math.random() * 16777215)
    	.toString(16)
    	.padStart(6, '0');
  		return `#${randomColor}`;
};

	const rightContent = () => {
		return(
			<Avatar.Image
				size={100}
				source={{uri: items.item?.images?.icon}}
				style={{
					backgroundColor: null,
				}}
			/>
			)
	}
	return (
		<View style={{flex: 1}}>
			<Header onPress={() => navigation.goBack()}/>
			<Card>
				<Card.Title
					title={items.item?.name}
					titleStyle={{
						fontSize: 30
					}}
					subtitle={items.item?.description}
					subtitleStyle={{
						fontSize: 16
					}}
					right={rightContent}
					rightStyle={{
						backgroundColor: generateColor(),
						color: null,
						borderRadius: 100,
						marginTop: 15,
						marginRight: 15
					}}
				/>
				<Card.Content>
					<Subheading>{items.item?.type} | {items.item?.series || items.item?.rarity}</Subheading>
					<Subheading>First Occurrence: {items.itemOccurrences?.firstOccurrences}</Subheading>
					<Subheading>Last Occurrence: {items.itemOccurrences?.lastOccurrences}</Subheading>
					<Subheading>Occurrences: {items.itemOccurrences?.occurrences}</Subheading>
					<Divider/>
					
				</Card.Content>
			</Card>
		</View>
	)
}

export default ItemDetails