import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./slices/restaurantSlice";

const reducers = { restaurant: restaurantSlice };
export const rootReducer = combineReducers(reducers);

export default configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof rootReducer>;
