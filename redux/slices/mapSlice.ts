import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMapLocations } from "../../api/requests";

export const fetchMapLocations = createAsyncThunk(
  "map/fetchMapLocations",
  async (payload: any): Promise<any> => {
    const response = await getMapLocations();
    return response;
  }
);

const mapSlice = createSlice<any, any>({
  name: "map",

  initialState: {
    status: "success",
    map: {},
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMapLocations.fulfilled, (state, action) => {
      state.map = action.payload.data;
      return state;
    });
  },
});

export default mapSlice.reducer;
