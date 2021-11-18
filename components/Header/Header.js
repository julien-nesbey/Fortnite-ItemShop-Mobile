import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, StatusBar } from 'react-native'

const { width, height } = Dimensions.get("window");

const Header = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/title.png")}
				style={styles.image}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: width / 6,
		alignItems: "center",
		backgroundColor: "red",
	},
	image: {
		top: 15.9 * -StatusBar.currentHeight,
		width: width / 2,
		justifyContent: "center",
		alignItems: "center",
		resizeMode: "contain",
	}
})

export default Header