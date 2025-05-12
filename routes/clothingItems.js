const router = require('express').Router();
const getClothingItems = require('../controllers/ClothingItem/getClothingItems');
const createClothingItem = require('../controllers/ClothingItem/createClothingItem');
const deleteClothingItem = require('../controllers/ClothingItem/deleteClothingItem');
const likeItem = require('../controllers/Likes/likeItem');
const dislikeItem = require('../controllers/Likes/dislikeItem');
const auth = require('../middlewares/auth');
const {validateClothingItemBody, validateId} = require("../middlewares/validation");

router.get('/', getClothingItems);
router.post('/', auth, validateClothingItemBody(), createClothingItem);
router.delete('/:itemId', auth, validateId(), deleteClothingItem);
router.put('/:itemId/likes', auth, validateId(), likeItem);
router.delete('/:itemId/likes', auth, validateId(), dislikeItem);

module.exports = router;