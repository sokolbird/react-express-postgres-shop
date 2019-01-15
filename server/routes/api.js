const express = require('express');

const router = express.Router();
const productsManager = require('../manager/products');

router.get('/products', (req, res, next) => {
  const limit = req.query['_limit'];
  const page = req.query['_page'];
  const offset = limit * page - limit;


  productsManager
    .getProducts(offset, limit)
    .then((result) => {
      res.set({ 'X-Total-Count': result.pagination.rowCount });
      res.json(result);
    })
    .catch(err => next(err));
});

router.param('id', (req, res, next, id) => {
  productsManager
    .getProductById(id)
    .then((product) => {
      res.product = product;
      next();
    })
    .catch(e => next(e));
});

router.get('/products/:id', (req, res, next) => {
  res.json(res.product);
});

router.delete('/products/:id', (req, res, next) => {
  productsManager.deleteProduct(req.params.id).then(() => {
    res.send(`Deleted product with id ${req.params.id}`);
  });
});

router.patch('/products/:id', (req, res, next) => {
  productsManager
    .updateProduct(req.params.id, req.body)
    .then(() => res.send(`Updated product with id ${req.params.id}`));
});

router.post('/products', (req, res, next) => {
  productsManager
    .addProduct(req.body)
    .then(data => res.send(`Added product with id ${data.id}`));
});

module.exports = router;
