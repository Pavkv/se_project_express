const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const {BAD_REQUEST, CONFLICT} = require('../../utils/constants');

module.exports = (req, res, next) => {
  const { name, avatar, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then(hash => User.create({
      name, avatar, email, password: hash
    }))
    .then(user => {
      user = user.toObject();
      delete user.password;
      res.send({data: user});
    }).catch(err => {
      if (err.code === 11000) {
        err.status = CONFLICT;
        err.message = 'A user with this email already exists.';
      } else {
        err.status = BAD_REQUEST;
        err.message = 'Invalid data passed to the methods for creating an user.';
      }
      next(err);
  });
};