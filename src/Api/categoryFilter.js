import axios from "axios";

const CATEGORY_FILTER = "https://dummyjson.com/products/category/smartphones";

export const fetchCategoryFilter = () => {
  return axios.get(CATEGORY_FILTER).then((response) => response.data.products);
};
