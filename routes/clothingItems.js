const router = require('express').Router();
const getClothingItems = require('../controllers/ClothingItem/getClothingItems');
const createClothingItem = require('../controllers/ClothingItem/createClothingItem');
const deleteClothingItem = require('../controllers/ClothingItem/deleteClothingItem');
const auth = require('../middlewares/auth');

router.get('/', getClothingItems);
router.post('/', auth, createClothingItem);
router.delete('/:itemId', auth, deleteClothingItem);
router.put('/:itemId/likes', auth, require('../controllers/Likes/likeItem'));
router.delete('/:itemId/likes', auth, require('../controllers/Likes/dislikeItem'));

module.exports = router;