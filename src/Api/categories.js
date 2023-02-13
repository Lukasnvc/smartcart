import axios from "axios";

const CATEGORIES = "https://dummyjson.com/products/categories";

export const fetchCategoriesList = () => {
  return axios.get(CATEGORIES).then((response) => response.data);
};
