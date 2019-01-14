const express = require("express");
const router = express.Router();
const db = require("../../db.json");
const productsManager = require("../manager/products");

router.get("/products", function(req, res, next) {
  const limit = req.query["_limit"] || 4;
  const page = req.query["_page"] || 1;
  const offset = limit * page - limit;

  productsManager.getProductsCount().then(result => {
    res.set({ "X-Total-Count": result.count });
  });

  productsManager.getProducts(offset, limit).then(result => res.json(result));
});

router.param("id", (req, res, next, id) => {
  productsManager
    .getProductById(id)
    .then(product => {
      res.product = product;
      next();
    })
    .catch(e => next(e));
});

router.get("/products/:id", function(req, res, next) {
  res.json(res.product);
});

module.exports = router;
