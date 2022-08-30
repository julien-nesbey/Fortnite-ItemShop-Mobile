import React, { useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";

//Api
import { getShop } from "../../api/api";

//Components
import Header from "../Header/Header";
import Shop from "../ShopItem/Shop";
import Loading from "../Loading/Loading";

//Styles
import styles from "./Styles";

const ShopList = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isCanceled = false;

    if (!isCanceled) fetchItems();

    return () => {
      isCanceled = true;
    };
  }, []);

  const fetchItems = () => {
    getShop()
      .then(async (response) => {
        setItems(response.data);
      })
      .catch((err) => Alert("Fortnite", err))
      .finally(() => setLoading(false));
  };

  const renderShop = ({ item }) => (
    <Shop
      id={item.itemId}
      name={item.item.name}
      cost={item.store.cost}
      image={item.item.images.information}
      rarity={item.item.rarity}
      series={item.item.series}
    />
  );

  const separator = () => (
    <View
      style={{
        alignSelf: "center",
        height: 5,
        width: "90%",
        backgroundColor: "#000",
      }}
    />
  );
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.push("Home")} />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={items}
          renderItem={renderShop}
          keyExtractor={(item) => item.itemId}
          showsVerticalScrollIndicator={false}
          onRefresh={() => fetchItems()}
          refreshing={false}
          ItemSeparatorComponent={separator}
          horizontal={false}
          numColumns={2}
          initialNumToRender={2}
        />
      )}
    </View>
  );
};

export default ShopList;
