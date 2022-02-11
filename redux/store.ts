import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./slices/restaurantSlice";
import listOfRestaurantViewSlice from "./slices/listOfRestaurantViewSlice";
import mapSlice from "./slices/mapSlice";

const reducers = { restaurant: restaurantSlice, listView: listOfRestaurantViewSlice, map: mapSlice };
export const rootReducer = combineReducers(reducers);

export default configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
