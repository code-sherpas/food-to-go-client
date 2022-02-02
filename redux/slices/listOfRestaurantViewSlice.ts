import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDeals, getLocation, getRecommended } from "../../api/requests";

export const fetchDeals = createAsyncThunk(
  "listView/fetchDeals",
  async (payload?: any): Promise<any> => {
    const response = (await getDeals());
    response.data = response.data.map((deal) => {
      return {
        lastChance: true,
        ...deal,
      };
    });
    return response;
  }
);

export const fetchRecommended = createAsyncThunk(
  "listView/fetchRecommended",
  async (payload?: any): Promise<any> => {
    const response = await getRecommended();
    return response;
  }
);

export const fetchLocation = createAsyncThunk(
  "listView/fetchLocation",
  async (payload?: any): Promise<any> => {
    const response = getLocation();
    return response;
  }
);

const listOfRestaurantsViewSlice = createSlice<any, any>({
  name: "listView",

  initialState: {
    status: "success",
    deals: [],
    recommended: [],
    location: {},
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDeals.fulfilled, (state, action) => {
      state.deals = action.payload.data;
      return state;
    }).addCase(fetchRecommended.fulfilled, (state, action) => {
      state.recommended = action.payload.data;
      return state;
    }).addCase(fetchLocation.fulfilled, (state, action) => {
      state.location = action.payload.data;
      return state;
    });
  },
});

export default listOfRestaurantsViewSlice.reducer;
