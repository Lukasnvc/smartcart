import { useQuery } from "react-query";
import { fetchAllProducts } from "../Api/allProducts";
import { fetchByCategory } from "../Api/byCategory";
import { fetchCategoriesList } from "../Api/categories";

const ALL_PRODUCT_DATA = "ALL_PRODUCT_DATA";

export const useAllProducts = () => {
  return useQuery(ALL_PRODUCT_DATA, fetchAllProducts);
};

const PRODUCTS_BY_CATEGORY = "PRODUCTS_BY_CATEGORY";

export const useProductsByCategory = (category) => {
  return useQuery([PRODUCTS_BY_CATEGORY, category], () =>
    fetchByCategory(category)
  );
};

const ALL_CATEGORIES = "ALL_CATEGORIES";

export const useCategoriesList = () => {
  return useQuery(ALL_CATEGORIES, fetchCategoriesList);
};
