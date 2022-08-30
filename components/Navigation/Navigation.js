import React, {useEffect} from "react";
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";

//Screens
import Header from "../Header/Header";
import Home from "../Home/Home";
import Shop from "../ShopItem/Shop";
import ShopList from "../ShopList/ShopList";
import Upcoming from "../Upcoming/Upcoming";
import Update from "../Updates/Update";
import ItemDetails from "../ItemDetails/ItemDetails";
import ToggleMode from "../Settings/Settings";

//Theme
import {LightTheme, NightTheme} from "../../Theme/theme";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
	<HomeStack.Navigator initialRouteName="Home">
		<HomeStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
		<HomeStack.Screen name="Header" component={Header} options={{headerShown:false}}/>
		<HomeStack.Screen name="ShopList" component={ShopList} options={{headerShown:false}}/>
		<HomeStack.Screen name="Upcoming" component={Upcoming} options={{headerShown:false}}/>		
		<HomeStack.Screen name="ItemDetails" component={ItemDetails} options={{headerShown:false}}/>		
	</HomeStack.Navigator>
	)

const UpdateStack = createNativeStackNavigator();
const UpdateStackScreen = () => (
	<UpdateStack.Navigator>
		<UpdateStack.Screen name="Update" component={Update} options={{headerShown: false}}/>
	</UpdateStack.Navigator>
	)

const SettingsStack = createNativeStackNavigator();
const SettingsStackScreen = () => (
	<SettingsStack.Navigator>
		<SettingsStack.Screen name="Settings" component={ToggleMode} options={{headerShown: false}} />
	</SettingsStack.Navigator>
	)

const Drawer = createDrawerNavigator();

const Navigation = () => {
	const themeReducer = useSelector(({ themeReducer }) => themeReducer);
	const {colors} = useTheme();

	return(
	<NavigationContainer theme={themeReducer.theme ? NightTheme : LightTheme}>
		<Drawer.Navigator
			screenOptions={{
				drawerStyle:{backgroundColor: colors.background, width: "50%"},
				drawerType: "slide"
			}}
		>
			<Drawer.Screen
				name="HomeScreen"
				component={HomeStackScreen}
				options={{
					headerShown:false,
					title: "Home",
					drawerLabelStyle:{color: colors.text},
					drawerItemStyle:{backgroundColor: colors.backgroun}
				}}
			/>
			<Drawer.Screen
				name="UpdateScreen"
				component={UpdateStackScreen}
				options={{
					headerShown:false,
					title: "Check For Update",
					drawerLabelStyle:{color: colors.text},
					drawerItemStyle:{backgroundColor: colors.background}
				}}
			/>
			<Drawer.Screen
				name="SettingsScreen"
				component={SettingsStackScreen}
				options={{
					headerShown: false,
					title:"Settings",
					drawerLabelStyle:{color: colors.text},
					drawerItemStyle:{backgroundColor: colors.background}
				}}
			/>
		</Drawer.Navigator>
	</NavigationContainer>
	)}

export default Navigation;