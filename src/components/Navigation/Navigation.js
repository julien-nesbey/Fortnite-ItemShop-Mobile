import "react-native-gesture-handler";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Redux
import { useSelector } from "react-redux";

//Components
import Header from "../Header/Header";
import ShopList from "../ShopList/ShopList";
import Upcoming from "../Upcoming/Upcoming";

//Screens
import Home from "../../Pages/Home/Home";
import Update from "../../Pages/Updates/Update";
import ItemDetails from "../../Pages/ItemDetails/ItemDetails";
import ItemVideo from "../../Pages/ItemDetails/ItemVideo";
import ToggleMode from "../../Pages/Settings/Settings";

//Icons
import { Feather } from "@expo/vector-icons";

//Theme
import { LightTheme, NightTheme } from "../../Theme/theme";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Header"
      component={Header}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="ShopList"
      component={ShopList}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Upcoming"
      component={Upcoming}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Details"
      component={DetailsStackTab}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const DetailsStack = createNativeStackNavigator();
const DetailsStackTab = () => (
  <DetailsStack.Navigator initialRouteName="ItemDetails">
    <DetailsStack.Screen
      name="ItemDetails"
      component={ItemDetails}
      options={{ headerShown: false, title: "Info" }}
    />
    <DetailsStack.Screen
      name="ItemVideo"
      component={ItemVideo}
      options={{ headerShown: false, title: "Video" }}
    />
  </DetailsStack.Navigator>
);

const UpdateStack = createNativeStackNavigator();
const UpdateStackScreen = () => (
  <UpdateStack.Navigator>
    <UpdateStack.Screen
      name="Update"
      component={Update}
      options={{ headerShown: false }}
    />
  </UpdateStack.Navigator>
);

const SettingsStack = createNativeStackNavigator();
const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="Settings"
      component={ToggleMode}
      options={{ headerShown: false }}
    />
  </SettingsStack.Navigator>
);

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const themeReducer = useSelector(({ themeReducer }) => themeReducer);
  const { colors } = useTheme();

  return (
    <NavigationContainer theme={themeReducer.theme ? NightTheme : LightTheme}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { width: "60%" },
          drawerType: "slide",
        }}
      >
        <Drawer.Screen
          name="HomeScreen"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            title: "Home",
            drawerLabelStyle: { color: colors.text },
            drawerIcon: ({ focused }) => {
              let color;
              color = focused ? "#f00f00" : "#000000";
              return <Feather name="home" size={18} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="UpdateScreen"
          component={UpdateStackScreen}
          options={{
            headerShown: false,
            title: "Check For Update",
            drawerLabelStyle: { color: colors.text },
            drawerIcon: ({ focused }) => {
              let color;
              color = focused ? "#f00f00" : "#000000";
              return (
                <Feather name="arrow-down-circle" size={18} color={color} />
              );
            },
          }}
        />
        <Drawer.Screen
          name="SettingsScreen"
          component={SettingsStackScreen}
          options={{
            headerShown: false,
            title: "Settings",
            drawerLabelStyle: { color: colors.text },
            drawerIcon: ({ focused }) => {
              let color;
              color = focused ? "#f00f00" : "#000000";
              return <Feather name="settings" size={18} color={color} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
