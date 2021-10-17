import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  darkMode: false
};

const slice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { toggleTheme } = slice.actions;
