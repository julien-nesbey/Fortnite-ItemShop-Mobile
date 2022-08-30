import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { Switch, List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Components
import Header from "../../components/Header/Header";

//Redux
import * as themeActions from "../../redux/actions/theme.action";
import { useDispatch, useSelector } from "react-redux";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const themeReducer = useSelector(({ themeReducer }) => themeReducer);

  const changeValue = async (val) => {
    try {
      dispatch(themeActions.ToggleTheme(val));
      await AsyncStorage.setItem("theme", val.toString());
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header onPress={() => navigation.navigate("Home")} />
      <List.Item
        title="Dark Mode"
        left={() => <List.Icon icon="brightness-4" />}
        right={() => (
          <Switch value={themeReducer.theme} onValueChange={changeValue} />
        )}
      />
    </View>
  );
};
