import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { useTheme } from "@react-navigation/native";
import styles from "./styles";

//Components
import Header from "../../components/Header/Header";

//Update
import * as Updates from "expo-updates";

//If there is an available update, install it.
const triggerUpdate = async () => {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      Alert.alert("Fortnite", "Update Completed!");
      Updates.reloadAsync();
    } else {
      Alert.alert("Fortnite", "No Update Is Available!");
    }
  } catch (error) {
    Alert.alert("Fortnite", error.message);
  }
};

//Checking for available update
const checkUpdates = async () => {
  Updates.addListener((event) => {
    if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
      Alert.alert("Betta", "An update is available!");
    }
  });
};

const Update = ({ navigation }) => {
  const [updateChecking, setUpdateChecking] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    checkUpdates();
  }, []);

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate("HomeScreen")} />
      <View style={styles.wrapper}>
        <Pressable
          onPress={async () => {
            setUpdateChecking(true);
            await triggerUpdate();
            setUpdateChecking(false);
          }}
          style={[styles.btn, { backgroundColor: colors.primary }]}
        >
          <Text style={styles.text}>Check For Update!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Update;
