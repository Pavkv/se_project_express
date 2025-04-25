const User = require('../../models/user');
const bcrypt = require('bcryptjs');

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
    }).catch(err => next(err));
};