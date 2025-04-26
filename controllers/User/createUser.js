const bcrypt = require('bcryptjs');
const User = require('../../models/user');

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
    }).catch(err => next(err));
};