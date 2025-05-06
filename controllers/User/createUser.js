const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const {BadRequestError, ConflictError} = require("../../utils/errors");

module.exports = (req, res, next) => {
  const { name, avatar, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then(hash => User.create({
      name, avatar, email, password: hash
    }))
    .then(user => {
      const userData = user.toObject();
      delete userData.password;
      res.send({data: userData});
    }).catch(err => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Invalid data provided'));
      } else if (err.code === 11000) {
        next(new ConflictError('User with this email already exists'));
      } else {
        next(err);
      }
  });
};