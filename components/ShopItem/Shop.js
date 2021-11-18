import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import styles from "./Styles"

const Shop = (props) => {


	const { name, cost, rarity, isNew, image, loading } = props;

	let bgColor = "#fff";

	if(rarity === "uncommon"){
		bgColor = "#319236";
	}else if(rarity === "rare"){
		bgColor = "#4c51f7";
	}else if(rarity === "epic"){
		bgColor = "#9d4dbb";
	}else if(rarity === "legendary"){
		bgColor = "#f3af19";
	}else{
		bgColor = "#fff";
	}

	return (
		<View style={styles.container}>
			<View style={[styles.box, {backgroundColor: bgColor}]} >

			{loading ? <ActivityIndicator size="large" /> :
				<Image
					source={{uri: image}}
					style={styles.image}
				/>
			}

				{isNew === true && <Text style={[styles.newItem, {color: bgColor}]}>New</Text>}

				<View style={styles.info}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.cost}>{cost}Vbucks</Text>
				</View>
			</View>
		</View>
	)
}

export default Shop