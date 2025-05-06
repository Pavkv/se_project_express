const router = require('express').Router();
const getClothingItems = require('../controllers/ClothingItem/getClothingItems');
const createClothingItem = require('../controllers/ClothingItem/createClothingItem');
const deleteClothingItem = require('../controllers/ClothingItem/deleteClothingItem');
const likeItem = require('../controllers/Likes/likeItem');
const dislikeItem = require('../controllers/Likes/dislikeItem');
const auth = require('../middlewares/auth');
const {validateClothingItemBody, validateId} = require("../middlewares/validation");

router.get('/', getClothingItems);
router.post('/', auth, (req, res, next) => {
  console.log(req.body);
  next();
},
  validateClothingItemBody(), createClothingItem);
router.delete('/:itemId', validateId(), auth,  deleteClothingItem);
router.put('/:itemId/likes', validateId(), auth, likeItem);
router.delete('/:itemId/likes', validateId(), auth, dislikeItem);

module.exports = router;