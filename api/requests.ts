import api from "./api";
import response from "./restaurantResponse";
import mapResponse from "./mapResponse";
import dealsResponse from "./dealsResponse";
import recommendedResponse from "./recommendedResponse";
import locationResponse from "./locationResponse";

export const getRestaurantDetails = (restaurantID: string) => {
  return response;
};

export const getDeals = () => {
  return dealsResponse;
};

export const getRecommended = () => {
  return recommendedResponse;
}

export const getLocation = () => {
  return locationResponse;
};

export const getMapLocations = () => {
  return mapResponse;
}