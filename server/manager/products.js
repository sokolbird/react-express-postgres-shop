const productsModel = require('../models/products');

const getProducts = (offset, limit) => productsModel.getProducts(offset, limit);

const getProductsCount = () => productsModel.getProductsCount();

const getProductById = id => productsModel.getProductById(id);

const addProduct = product => productsModel.addProduct(product);

const deleteProduct = id => productsModel.deleteProduct(id);

const updateProduct = (id, newProduct) => productsModel.updateProduct(id, newProduct);

module.exports = {
  getProducts,
  getProductsCount,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
