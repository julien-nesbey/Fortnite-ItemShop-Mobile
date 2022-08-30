import React, { useState, useLayoutEffect } from "react";
import { View, StatusBar } from "react-native";

//Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./src/redux/reducers/index.reducer";

//Network Connection
import { useNetInfo } from "@react-native-community/netinfo";

//Navigation
import Navigation from "./src/components/Navigation/Navigation";
import NotConnected from "./src/components/Connection/NotConnected";

//Creating store that stores all theme varibales
var middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);

const App = () => {
  const NetInfo = useNetInfo();
  const [isConnected, setIsConnected] = useState();

  useLayoutEffect(() => {
    NetInfo.isConnected ? setIsConnected(true) : setIsConnected(false);
  }, [NetInfo.isConnected]);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Provider store={store}>
        <StatusBar style="auto" />
        {isConnected ? <Navigation /> : <NotConnected />}
      </Provider>
    </View>
  );
};

export default App;
