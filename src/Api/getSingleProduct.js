import axios from "axios";

const SINGLE_PRODUCT = "https://dummyjson.com/products/";

export const fetchSingleProduct = (id) => {
  return axios.get(SINGLE_PRODUCT + id).then((response) => response.data);
};
