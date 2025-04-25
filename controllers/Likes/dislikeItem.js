const ClothingItem = require('../../models/clothingItem');

module.exports = (req, res, next) => {
  ClothingItem.findByIdAndUpdate(req.params.itemId, {$pull: {likes: req.user._id}}, {new: true})
    .orFail()
    .then(clothingItem => res.send({data: clothingItem}))
    .catch(err => next(err));
};