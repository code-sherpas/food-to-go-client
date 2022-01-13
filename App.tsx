import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { View, Text, StyleSheet, Button } from 'react-native';
import ListofRestaurantView from "./views/listOfRestaurantView";
import RestaurantView from "./views/restaurantView";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.rootContainer}>
      <RestaurantView />
      {/* <ListofRestaurantView/> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FCF9F2",
    minHeight: "100%"
  }
})