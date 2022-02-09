import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { View, Text, StyleSheet, Button } from 'react-native';
import ListOfRestaurantView from "./views/listOfRestaurantView";
import RestaurantView from "./views/restaurantView";
import MapView from "./views/MapView";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <View style={styles.rootContainer}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={MapView} options={{ headerShown: false }} />
            <Stack.Screen name="ListOfRestaurantView" component={ListOfRestaurantView} options={{ headerShown: false }} />
            <Stack.Screen name="RestaurantView" component={RestaurantView} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FCF9F2",
    flex: 1
  }
})