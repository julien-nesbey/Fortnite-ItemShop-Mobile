import React, { useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";

//Api
import { getUpcoming } from "../../api/api";

//Styling
import styles from "../ShopList/Styles";

//Components
import Shop from "../ShopItem/Shop";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

const Upcoming = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isCanceled = false;

    if (!isCanceled) fetchItems();

    return () => {
      isCanceled = true;
    };
  }, []);

  const fetchItems = () =>
    getUpcoming()
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => Alert("Fortnite", err))
      .finally(() => setLoading(false));

  const renderShop = ({ item }) => (
    <Shop
      id={item.itemId}
      name={item.item.name}
      cost={item.store?.cost || "??? "}
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
    ></View>
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
          initialNumToRender={2}
          horizontal={false}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Upcoming;
