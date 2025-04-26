const ClothingItem = require('../../models/clothingItem');

module.exports = (req, res, next) => {
  ClothingItem.findByIdAndDelete(req.params.itemId)
    .orFail()
    .populate('owner')
    .then(clothingItem => {
      if (req.user._id !== clothingItem.owner._id) {
        const error = new Error('You do not have permission to delete this item');
        error.name = 'ForbiddenError';
        next(error);
      }
      res.send({data: clothingItem});
    })
    .catch(err => next(err));
};