const router = require('express').Router();
const signup = require('../controllers/User/createUser');
const signin = require('../controllers/User/login');

router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;