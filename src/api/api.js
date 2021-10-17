import axios from 'axios';
import Qs from 'qs';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  responseType: 'json'
});

api.interceptors.request.use(config => {
  config.paramsSerializer = params => {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      encode: true
    });
  };

  return config;
});

export default api;
