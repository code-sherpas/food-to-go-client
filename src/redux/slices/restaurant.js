import { createSlice } from '@reduxjs/toolkit';
import { getRestaurantList } from '../../api/requests';

const restaurantSlice = createSlice({
  name: 'restaurant',

  initialState: {
    restaurant: null
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
    // GET restaurantgetrestaurantSucces
    getRestaurantSuccess(state, action) {
      state.isLoading = false;
      state.restaurant = action.payload;
    }
  }
});

// Reducer
export default restaurantSlice.reducer;

// ----------------------------------------------------------------------

export function getRestaurant() {
  return async dispatch => {
    dispatch(restaurantSlice.actions.startLoading());
    try {
      const response = await getRestaurantList();
      dispatch(restaurantSlice.actions.getRestaurantSuccess(response));
    } catch (error) {
      dispatch(restaurantSlice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
