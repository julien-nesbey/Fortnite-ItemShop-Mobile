import React, { useEffect } from "react";
import { View } from "react-native";
import { Drawer, Title } from "react-native-paper";
import { useNavigation, useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Redux
import { useDispatch, useSelector } from "react-redux";
import * as themeActions from "../../redux/actions/theme.action";

const Home = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const themeReducer = useSelector(({ themeReducer }) => themeReducer);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const themeMode = await AsyncStorage.getItem("theme");
      if (themeMode !== null) {
        let themeType = themeMode === "true" ? true : false;
        dispatch(themeActions.ToggleTheme(themeType));
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Title
        style={{
          fontSize: 32,
          textAlign: "center",
          paddingVertical: 5,
          color: colors.text,
        }}
      >
        Fortnite
      </Title>
      <Drawer.Section>
        <Drawer.Item
          label="Daily Shop"
          style={{ backgroundColor: colors.primary }}
          onPress={() => navigation.push("ShopList")}
        />
        <Drawer.Item
          label="Upcoming Items"
          style={{ backgroundColor: colors.primary }}
          onPress={() => navigation.push("Upcoming")}
        />
      </Drawer.Section>
    </View>
  );
};

export default Home;
