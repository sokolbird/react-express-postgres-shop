const pgp = require("pg-promise")();

let db = false;

const getConnection = () => {
  const connection = "postgres://postgres:123456@localhost:5432/Products";
  if (!db) {
    db = pgp(connection);
  }
  return db;
};

module.exports = {
  getConnection
};
