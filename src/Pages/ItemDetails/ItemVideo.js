import { useState, useRef } from "react";
import { View } from "react-native";
import { Video } from "expo-av";

//Components
import Header from "../../components/Header/Header";

const ItemVideo = ({ navigation, route }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const { url } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Header onPress={() => navigation.goBack()} />
      <Video
        ref={video}
        style={{ width: "100%", height: 300 }}
        source={{ uri: url }}
        useNativeControls={true}
        resizeMode="contain"
        volume={0.5}
        isLooping={true}
        shouldPlay={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default ItemVideo;
