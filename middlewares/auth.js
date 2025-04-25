const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const { UNAUTHORIZED } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(UNAUTHORIZED).json({ message: 'Authorization required' });
  }

  const token = authorization.replace('Bearer ', '');

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ message: 'Authorization required' });
  }
};