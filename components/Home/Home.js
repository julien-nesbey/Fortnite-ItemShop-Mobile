import React, {useState} from 'react'
import { View, Text} from 'react-native'
import {Drawer, Title} from "react-native-paper";
import {useNavigation, useTheme} from "@react-navigation/native";

const Home = (props) => {
	const navigation = useNavigation();
	const {colors} = useTheme()
	return (
		<View style={{flex: 1}}>
			<Title style={{fontSize: 32, textAlign: "center", paddingVertical: 5, color: colors.text}}>Fortnite</Title>
			<Drawer.Section>
				<Drawer.Item
					label="Daily Shop"
					style={{backgroundColor: colors.primary}}
					onPress={() => navigation.push("ShopList")}
				/>
				<Drawer.Item
					label="Upcoming Items"
					style={{backgroundColor: colors.primary}}
					onPress={() => navigation.push("Upcoming")}
				/>
			</Drawer.Section>
		</View>
	)
}

export default Home