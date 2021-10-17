import { createSlice } from '@reduxjs/toolkit';

const logEntrySlice = createSlice({
  name: 'logEntry',

  initialState: {
    logEntry: null
  },

  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET LOG ENTRY
    getLogEntrySuccess(state, action) {
      state.isLoading = false;
      state.logEntry = action.payload;
    }
  }
});

// Reducer
export default logEntrySlice.reducer;

// ----------------------------------------------------------------------

export function getlogEntry() {
  return async dispatch => {
    dispatch(logEntrySlice.actions.startLoading());
    try {
      const response = {};
      dispatch(logEntrySlice.actions.getLogEntrySuccess(response));
    } catch (error) {
      dispatch(logEntrySlice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
