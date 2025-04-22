const router = require('express').Router();
const getClothingItems = require('../controllers/ClothingItem/getClothingItems');
const createClothingItem = require('../controllers/ClothingItem/createClothingItem');
const deleteClothingItem = require('../controllers/ClothingItem/deleteClothingItem');

router.get('/', getClothingItems);
router.post('/', createClothingItem);
router.delete('/:itemId', deleteClothingItem);
router.put('/:itemId/likes', require('../controllers/Likes/likeItem'));
router.delete('/:itemId/likes', require('../controllers/Likes/dislikeItem'));

module.exports = router;