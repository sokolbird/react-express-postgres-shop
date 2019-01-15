const dbConfig = {
  client: 'postgres',
  debug: true,
  connection: {
    port: '5432',
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'Products',
  },
};

module.exports = dbConfig;
