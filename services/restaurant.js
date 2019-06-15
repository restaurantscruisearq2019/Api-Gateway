const axios = require("axios");
const { restaurantsURL } = require('../config/apiRoutes');

const getRestaurant = async (id = null) => {
  const url = restaurantsURL;
  const res = await axios.get(url);
  return id ? res.data.data.filter(r => r._id === id) : res.data.data;
};

const getDayInfoRestaurants = async () => {
  const url = restaurantsURL;
  const res = await axios.get(url);
  return res.data.data[0].isopen;
};

const getRestaurantsByCategories = async (category) => {
  const url = restaurantsURL;
  const res = await axios.get(url);
  const restaurantsByCategories = res.data.data.filter(r => r.category === category);
  return restaurantsByCategories;
};

const getRestaurantsByPricerange = async (priceRange) => {
  const url = restaurantsURL;
  const res = await axios.get(url);
  const restaurantsByPricerange = res.data.data.filter(r => r.menu.priceRange === priceRange);
  return restaurantsByPricerange;
};

const getRestaurantsByMenu = async (mType) => {
  const url = restaurantsURL;
  const res = await axios.get(url);
  const restaurantsByMenu = res.data.data.filter(r => r.menu.mType === mType);
  return restaurantsByMenu;
};

module.exports = {
  getRestaurant,
  getDayInfoRestaurants,
  getRestaurantsByCategories,
  getRestaurantsByPricerange,
  getRestaurantsByMenu
};
