import React, { useState } from "react";
import { View, AsyncStorage } from "react-native";
import { Switch, List } from "react-native-paper";
import Header from "../Header/Header";

import * as themeActions from "../../redux/actions/theme.action";
import { useDispatch,useSelector } from "react-redux";

export default ({ navigation }) => {
    const dispatch = useDispatch();
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);

    return (

        <View style={{ flex: 1}}>
            <Header onPress={() => navigation.navigate("Home")}/>
            <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch value={themeReducer.theme} onValueChange={(val)=>dispatch(themeActions.ToggleTheme(val))} />}
            />
        </View>
    )
}