module.exports = (err, req, res, next) => {
  console.log(err);

  if (err.name === 'DocumentNotFoundError') {
    return res.status(404).json({
      message:
        'There is no user or clothing item with the requested id, or the request was sent to a non-existent address.',
    });
  }

  if (
    err.name === 'ValidationError' ||
    err.name === 'CastError' ||
    err.name === 'AssertionError'
  ) {
    return res.status(400).json({
      message:
        'Invalid data passed to the methods for creating an item/user or updating an item, or invalid ID passed to the params.',
    });
  }

  return res.status(500).json({
    message: 'An error occurred on the server.',
  });
};