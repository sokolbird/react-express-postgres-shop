const productsModel = require("../models/products");

const getProducts = (offset, limit) => {
  return productsModel.getProducts(offset, limit);
};

const getProductsCount = () => {
  return productsModel.getProductsCount();
};

const getProductById = id => {
  return productsModel.getProductById(id);
};

module.exports = { getProducts, getProductsCount, getProductById };
