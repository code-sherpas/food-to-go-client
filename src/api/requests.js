import api from './api';

export const getRestaurantList = async () => {
  const res = await api.get('/get');
  return res.data;
};

export const getFoodItemsList = async restaurantName => {
  const res = await api.get(`/get/items/${restaurantName}`);
  return res.data;
};
