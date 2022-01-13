import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListViewOfRestaurants } from "../../api/requests";

export const fecthListOfRestaurants = createAsyncThunk(
  "listView/fecthListOfRestaurants",
  async (payload?: any): Promise<any> => {
    const response = await getListViewOfRestaurants();
    return response;
  }
);

const listOfRestaurantsViewSlice = createSlice<any, any>({
  name: "listView",

  initialState: {
    status: "success",
    listView: {}
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fecthListOfRestaurants.fulfilled, (state, action) => {
      state.listView = action.payload.data;
      return state;
    });
  },
});

export default listOfRestaurantsViewSlice.reducer;
