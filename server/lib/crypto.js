const crypto = require('crypto');

const secret = 'rgr6456rtyhhyr43';
const hash = pass => crypto.createHmac('sha256', secret).update(pass).digest('hex');

module.exports = hash;
