import React from "react";
import { View, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import { useTheme, useNavigation } from "@react-navigation/native";

//Styles
import styles from "./Styles";

const Shop = (props) => {
  const { id, name, cost, rarity, series, image } = props;
  const { colors } = useTheme();
  const navigation = useNavigation();

  let bgColor = "#fff";

  //Change card background color depending on item rarity
  if (rarity === "uncommon") {
    bgColor = "#319236";
  } else if (rarity === "rare") {
    bgColor = "#4c51f7";
  } else if (rarity === "epic") {
    bgColor = "#9d4dbb";
  } else if (rarity === "legendary") {
    bgColor = "#f3af19";
  } else {
    bgColor = "#fff";
  }

  return (
    <View style={styles.container}>
      <Card
        style={[styles.box, { backgroundColor: colors.card }]}
        onPress={() => {
          navigation.navigate("Details", {
            screen: "ItemDetails",
            params: { id: id },
          });
        }}
      >
        <Card.Title
          title={name}
          titleStyle={{ fontSize: 26, color: colors.text }}
          titleNumberOfLines={1}
          subtitle={series?.toUpperCase() || rarity.toUpperCase()}
          subtitleStyle={[{ fontSize: 16, color: bgColor }]}
        />
        <Card.Content
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Title
            style={{ fontSize: 16, color: colors.text }}
          >{`${cost}`}</Title>
          <Image
            source={require("../../assets/images/vbucks.png")}
            style={{ height: 20, width: 20 }}
          />
        </Card.Content>
        <Card.Cover
          source={{ uri: image }}
          style={[styles.image, { backgroundColor: bgColor }]}
        />
      </Card>
    </View>
  );
};

export default Shop;
