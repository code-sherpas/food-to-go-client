import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ListofRestaurantView from "./views/listOfRestaurantView";
import RestaurantView from "./views/restaurantView";

export default function App() {
  return (
    <Provider store={store}>
      {/* <RestaurantView /> */}
      <ListofRestaurantView/>
    </Provider>
  );
}
