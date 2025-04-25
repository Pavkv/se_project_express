const User = require('../../models/user');
const {NOT_FOUND} = require('../../utils/constants');

module.exports = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then(user => res.send({data: user}))
    .catch(err => {
      err.status = NOT_FOUND;
      err.message = 'User not found';
      next(err);
    });
};