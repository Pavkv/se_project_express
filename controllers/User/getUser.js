const User = require('../../models/user');

module.exports = (req, res, next) => {
  User.findById(req.params.id)
    .orFail()
    .then(user => res.send({ data: user }))
    .catch(err => next(err));
};