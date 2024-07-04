import axios from "axios";

export const getAllProducts = () => {
  return axios.get('https://dummyjson.com/products');
};

export const deleteProductById = (id) => {
  return axios.delete(`https://dummyjson.com/products/${id}`);
};

export const createProduct = (product) => {
  return axios.post('https://dummyjson.com/products', product, {
    headers: { "Content-Type": "application/json" },
  });
};

export const getProductById = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};

export const getAllCategories = () => {
  return axios.get('https://dummyjson.com/products/category-list');
};

export async function getProductsByCategory(category) {
  return axios.get(`https://dummyjson.com/products/category/${category}`)
}

export default getAllProducts;
