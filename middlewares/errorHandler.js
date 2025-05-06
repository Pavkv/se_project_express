const { DEFAULT } = require('../utils/errorCodes');

module.exports = (err, req, res, next) => {
  const { statusCode = DEFAULT, message } = err;
  res.status(statusCode).send({
    message: message || 'An error occurred on the server'
  });
  next();
}