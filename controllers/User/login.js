const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const {JWT_SECRET} = require('../../utils/config');

module.exports = (req, res, next) => {
  const {email, password} = req.body;

  User.findUserByCredentials(email, password, next)
    .then((user) => {
      res.send({
        token: jwt.sign({_id: user._id}, JWT_SECRET, {expiresIn: "7d",})
      });
    })
    .catch(err => next(err));
};