import axios from "axios";

const BY_CATEGORY = "https://dummyjson.com/products/category/";

export const fetchByCategory = (category) => {
  return axios
    .get(BY_CATEGORY + category)
    .then((response) => response.data.products);
};
