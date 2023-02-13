import axios from "axios";

const ALL_PRODUCTS_API = "https://dummyjson.com/products";

export const fetchAllProducts = () => {
  return axios.get(ALL_PRODUCTS_API).then((response) => response.data.products);
};
