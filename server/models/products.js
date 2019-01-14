const { getConnection } = require("../lib/db");

const db = getConnection();

const getProducts = (offset, limit) => {
  return db.any(
    `SELECT * FROM products p JOIN description d ON p.id = d.id ORDER BY p.id OFFSET ${offset} LIMIT ${limit}`
  );
};

const getProductsCount = () => {
  return db.one("SELECT count(*) FROM products");
};

const getProductById = id => {
  return db.one(
    `SELECT * FROM products p JOIN description d ON p.id = d.id WHERE p.id=${id}`
  );
};

module.exports = { getProducts, getProductsCount, getProductById };
