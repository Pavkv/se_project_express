const router = require('express').Router();
const getUser = require('../controllers/User/getCurrentUser');
const updateProfile = require('../controllers/User/updateProfile');
const auth = require('../middlewares/auth');

router.get('/me', auth, getUser);
router.patch('/me', auth, updateProfile);

module.exports = router;