import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const NotConnected = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#212121",
      }}
    >
      <Feather name="wifi-off" size={100} color="#ffffff" />
      <Text
        style={{
          fontSize: 15,
          textAlign: "justify",
          lineHeight: 40,
          color: "#ffffff",
        }}
      >
        It Looks Like You're Not Connected To The Internet{"\n"}
        Check Your Connection and Try Again!
      </Text>
    </View>
  );
};

export default NotConnected;
