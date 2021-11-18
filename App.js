import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform, Alert } from 'react-native';

import ShopList from "./components/ShopList/ShopList";

const App = () => {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent={false} />
      <ShopList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;