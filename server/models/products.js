const bookshelf = require('../lib/db');

const Description = bookshelf.Model.extend({
  tableName: 'description',
});

const Products = bookshelf.Model.extend({
  tableName: 'products',
  description: () => this.hasOne(Description),
});

const getProducts = (offset, limit) => Products.query((qb) => {
  qb.select('*').innerJoin('description', 'products.id', 'description.id');
})
  .orderBy('id')
  .fetchPage({ limit, offset });

const getProductById = id => Products.query((qb) => {
  qb.select('*').innerJoin('description', 'products.id', 'description.id');
  qb.where('products.id', id);
}).fetch();

const addProduct = product => Products.forge({
  name: product.name,
  category: product.category,
  price: product.price,
  quantity: product.quantity,
})
  .save()
  .then(res => Description.forge().save({ id: res.id, description: product.description }));

const updateProduct = (id, product) => Products.forge()
  .where('id', id)
  .save(
    {
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
    },
    { method: 'update' },
  )
  .then(() => Description.forge()
    .where('id', id)
    .save({ description: product.description }, { method: 'update' }));

const deleteProduct = id => Products.where('id', id).destroy();

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
