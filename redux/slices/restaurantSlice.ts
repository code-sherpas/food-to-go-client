import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRestaurantDetails } from "../../api/requests";

export const fetchRestaurantDetails = createAsyncThunk(
  "restaurant/fetchRestaurantDetails",
  async (payload: any): Promise<any> => {
    const response = await getRestaurantDetails(payload.restaurantID);
    return response;
  }
);

const restaurantSlice = createSlice<any, any>({
  name: "restaurant",

  initialState: {
    status: "success",
    restaurant: {},
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantDetails.fulfilled, (state, action) => {
      state.restaurant = action.payload.data;
      return state;
    });
  },
});

export default restaurantSlice.reducer;
