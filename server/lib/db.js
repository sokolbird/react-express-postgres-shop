const knex = require('knex')({
  client: 'postgres',
  debug: true,
  connection: {
    port: '5432',
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'Products',
  },
});
const bookshelf = require('bookshelf')(knex);


bookshelf.plugin('pagination');
module.exports = bookshelf;
