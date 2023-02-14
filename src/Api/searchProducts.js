import axios from "axios";

const SEARCH = "https://dummyjson.com/products/search?q=";

export const fetchSearch = (name) => {
  return axios.get(SEARCH + name).then((response) => response.data.products);
};
