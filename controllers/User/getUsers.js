const User = require('../../models/user');

module.exports = (req, res, next) => {
  User.find({})
    .orFail()
    .then(users => res.send({ data: users}))
    .catch(err => next(err));
};