const User = require('../../models/user');
const BadRequestError = require("../../utils/Errors/BadRequestError");
const NotFoundError = require("../../utils/Errors/NotFoundError");

module.exports = (req, res, next) => {
  const {name, avatar} = req.body;

  User.findByIdAndUpdate(req.user._id,
    {name, avatar},
    {new: true, runValidators: true})
    .orFail(() => new NotFoundError('User not found'))
    .then(user => res.send({data: user}))
    .catch(err => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Invalid data provided'));
      } else {
        next(err);
      }
    });
};