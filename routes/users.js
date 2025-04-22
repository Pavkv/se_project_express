const router = require('express').Router();
const getUsers = require('../controllers/User/getUsers');
const getUser = require('../controllers/User/getUser');
const createUser = require('../controllers/User/createUser');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);

module.exports = router;