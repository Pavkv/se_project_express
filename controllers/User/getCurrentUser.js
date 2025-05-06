const User = require('../../models/user');

module.exports = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then(user => res.send({data: user}))
    .catch(next);
};