import React from 'react';
import { View, StatusBar, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

//Navigation
import Navigation from "./components/Navigation/Navigation";

//Redux
import reducers from "./redux/reducers/index.reducer";
var middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <Provider store={store}>
        <StatusBar style="auto"/>
        <Navigation/>
      </Provider>
    </View>
  );
}

export default App;