import React from "react";
import { View, Image, StyleSheet, Dimensions, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Header = ({ onPress }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Feather
        name="arrow-left"
        size={32}
        onPress={() => onPress()}
        style={{ alignSelf: "center" }}
      />
      <Image
        source={require("../../assets/images/title.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: width / 6,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  image: {
    top: 15.9 * -StatusBar.currentHeight,
    width: width / 2,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
});

export default Header;
