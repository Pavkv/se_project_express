const User = require('../../models/user');
const {NOT_FOUND} = require('../../utils/constants');

module.exports = (req, res, next) => {
  const {name, avatar} = req.body;

  User.findByIdAndUpdate(req.user._id,
    {name, avatar},
    {new: true, runValidators: true})
    .orFail()
    .then(user => res.send({data: user}))
    .catch(err => {
      err.status = NOT_FOUND;
      err.message = 'User not found';
      next(err);
    });
};