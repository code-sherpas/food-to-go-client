import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { View, Text, StyleSheet, Button } from 'react-native';
import ListOfRestaurantView from "./views/listOfRestaurantView";
import RestaurantView from "./views/restaurantView";
import MapView from "./views/MapView";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.rootContainer}>
        <RestaurantView />
        {/* <ListOfRestaurantView /> */}
        {/* <MapView /> */}
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