const { UNAUTHORIZED, FORBIDDEN, NOT_FOUND, CONFLICT, BAD_REQUEST, DEFAULT } = require('./constants');

module.exports = (err, req, res, next) => {
  console.log(err.stack);

  if (err.name === 'UnauthorizedError') {
    res.status(UNAUTHORIZED).json({
      message: err.message,
    });
  } else if (err.name === 'ForbiddenError') {
    res.status(FORBIDDEN).json({
      message: 'You do not have permission to perform this action',
    });
  }
  else if (err.name === 'DocumentNotFoundError') {
    res.status(NOT_FOUND).json({
      message:
        'The requested resource was not found. Please check the URL and try again.',
    });
  } else  if (err.code === 11000) {
    res.status(CONFLICT).json({
      message: 'This email is already registered. Please use a different email.',
    });
  }
  else if (
    err.name === 'ValidationError' ||
    err.name === 'CastError'
  ) {
    res.status(BAD_REQUEST).json({
      message:
        'The request was malformed. Please check the data and try again.',
    });
  } else {
    res.status(DEFAULT).json({
      message: 'An error occurred on the server.',
    });
  }

  next();
};