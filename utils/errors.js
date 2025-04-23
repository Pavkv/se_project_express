const {NOT_FOUND, BAD_REQUEST, DEFAULT} = require('./constants');

module.exports = (err, req, res, next) => {
  console.log(err.stack);

  if (err.name === 'DocumentNotFoundError') {
    res.status(NOT_FOUND).json({
      message:
        'There is no user or clothing item with the requested id, or the request was sent to a non-existent address.',
    });
  } else if (
    err.name === 'ValidationError' ||
    err.name === 'CastError'
  ) {
    res.status(BAD_REQUEST).json({
      message:
        'Invalid data passed to the methods for creating an item/user or updating an item, or invalid ID passed to the params.',
    });
  } else {
    res.status(DEFAULT).json({
      message: 'An error occurred on the server.',
    });
  }

  next();
};