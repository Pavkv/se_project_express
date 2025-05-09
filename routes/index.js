const router = require('express').Router();
const signup = require('../controllers/User/createUser');
const signin = require('../controllers/User/login');
const {validateAuthentication, validateUserInfoBody} = require("../middlewares/validation");

router.post('/signup', validateUserInfoBody(), signup);
router.post('/signin', validateAuthentication(), signin);

module.exports = router;