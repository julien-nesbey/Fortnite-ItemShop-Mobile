import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");
const barHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height / 2.85,
	},
	box: {
		position: "absolute",
		width: "100%",
		alignItems: "center",
	},
	image:{
		width: 200,
		height: 200,
	},
	info: {
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
	},
	cost: {
		fontSize: 16,
	},
	newItem: {
		backgroundColor: "yellow",
		borderRadius: 10,
		padding: 5,
		position: "absolute",
		left: 10,
		top: 40,
		fontSize: 30,
		transform: [{rotate: "-30deg"}]
	}
});

export default styles;