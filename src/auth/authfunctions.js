const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secrettokenamanda';

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const getPayload = (token) => jwt.verify(token, secret);

module.exports = { createToken, getPayload };