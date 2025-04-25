const {DEFAULT} = require('./constants');

module.exports = (err, req, res, next) => {
  console.log(err.stack);

  if (err.status !== DEFAULT) {
    res.status(err.status).json({message: err.message});
  } else {
    res.status(DEFAULT).json({
      message: 'An error occurred on the server.',
    });
  }

  next();
};