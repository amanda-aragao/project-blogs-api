const { getPayload } = require('../auth/authfunctions');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const token = authorization.includes('Bearer') ? authorization.split(' ')[1] : authorization;
   
    const payloadToken = getPayload(token);
    req.payload = payloadToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
