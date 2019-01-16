const bookshelf = require('../lib/db');

const Users = bookshelf.Model.extend({
  tableName: 'users',
});

const registerUser = user => Users.forge().save(user);

const verifyCredentials = user => Users.query((qb) => {
  qb.where('email', user.email);
  qb.where('password', user.password);
}).fetch();

module.exports = {
  registerUser,
  verifyCredentials,
};
