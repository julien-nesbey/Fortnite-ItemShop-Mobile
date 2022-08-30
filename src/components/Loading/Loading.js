import React from "react";
import { View, Image } from "react-native";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/images/loading.gif")}
        height={null}
        width={null}
      />
    </View>
  );
};

export default Loading;
