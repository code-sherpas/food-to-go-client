import api from './api';

export const getRestaurantList = async () => {
  const res = await api.get('/get');
  return res.data;
};

export const getChildLogEntries = async childId => {
  const res = await api.get('/log-entries', {
    params: {
      filter: {
        childId
      }
    }
  });
  return res.data;
};
