import { createSlice } from '@reduxjs/toolkit';
import { getFoodItemsList } from '../../api/requests';

const foodItemsSlice = createSlice({
  name: 'foodItems',

  initialState: {
    foodItems: null
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
    getfoodItemsSuccess(state, action) {
      state.isLoading = false;
      state.foodItems = action.payload;
    }
  }
});

// Reducer
export default foodItemsSlice.reducer;

// ----------------------------------------------------------------------

export function getfoodItems() {
  return async dispatch => {
    dispatch(foodItemsSlice.actions.startLoading());
    try {
      const response = await getFoodItemsList('Dominoes');
      console.log(response);
      dispatch(foodItemsSlice.actions.getfoodItemsSuccess(response));
    } catch (error) {
      dispatch(foodItemsSlice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
