const authModel = require('../models/auth');
const hash = require('../lib/crypto');

const registerUser = user => authModel.registerUser({ ...user, password: hash(user.password) });
const verifyCredentials = user => authModel.verifyCredentials({ ...user, password: hash(user.password) });

module.exports = {
  registerUser,
  verifyCredentials,
};
