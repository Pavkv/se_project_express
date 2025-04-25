const User = require('../../models/user');

module.exports = (req, res, next) => {
  const {name, avatar} = req.body;

  User.findByIdAndUpdate(req.user._id,
    {name, avatar},
    {new: true, runValidators: true})
    .orFail()
    .then(user => res.send({data: user}))
    .catch(err => next(err));
};