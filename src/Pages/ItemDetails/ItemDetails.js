import React, { useState, useEffect } from "react";
import { View, Image, Alert } from "react-native";
import { Card, Subheading, Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

//Components
import Header from "../../components/Header/Header";

//Api
import { getSpecificItem } from "../../api/api";

const ItemDetails = ({ navigation, route }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { colors } = useTheme();
  const { id } = route.params;

  useEffect(() => {
    let isCanceled = false;
    if (!isCanceled) {
      getSpecificItem(id)
        .then(async (response) => setItems(response.data))
        .catch((err) => Alert("Fortnite", err))
        .finally(() => setLoading(false));
    }

    return () => (isCanceled = true);
  }, []);

  const renderRight = () => (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}
    >
      <Image
        source={{ uri: items.item?.images?.icon }}
        style={{ width: 100, height: 100, marginBottom: 10 }}
      />
      <Button
        icon="video"
        mode="contained"
        onPress={() =>
          navigation.push("ItemVideo", { url: items.item?.media[0]?.src })
        }
        style={{
          backgroundColor: colors.background,
        }}
      >
        Watch Video
      </Button>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header onPress={() => navigation.goBack()} />
      <Card style={{ margin: 10, backgroundColor: colors.card }}>
        <Card.Title
          title={items.item?.name || "No Information"}
          titleNumberOfLines={null}
          titleStyle={{
            color: colors.text,
            fontSize: 28,
            textAlign: "justify",
          }}
          subtitle={items.item?.description || "No Information"}
          subtitleNumberOfLines={null}
          subtitleStyle={{
            color: colors.text,
            fontSize: 14,
            textAlign: "justify",
          }}
          right={renderRight}
        />
        <Card.Content>
          <Subheading>
            {items.item?.type.toUpperCase() || "No Information"} |{" "}
            {items.item?.rarity.toUpperCase() || "No Information"}
          </Subheading>
          <Subheading>
            First Occurrence:{" "}
            {items.itemOccurrences?.firstOccurrences || "No Information"}
          </Subheading>
          <Subheading>
            Last Occurrence:{" "}
            {items.itemOccurrences?.lastOccurrences || "No Information"}
          </Subheading>
          <Subheading>
            Occurrences:{" "}
            {items.itemOccurrences?.occurrences || "No Information"}
          </Subheading>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ItemDetails;
