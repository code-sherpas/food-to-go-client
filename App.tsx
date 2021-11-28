import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import RestaurantView from "./views/restaurantView";

export default function App() {
  return (
    <Provider store={store}>
      <RestaurantView />
    </Provider>
  );
}
