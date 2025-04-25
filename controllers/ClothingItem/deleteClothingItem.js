const ClothingItem = require('../../models/clothingItem');
const { BAD_REQUEST, FORBIDDEN, NOT_FOUND } = require('../../utils/constants');

module.exports = (req, res, next) => {
  ClothingItem.findByIdAndDelete(req.params.itemId)
    .orFail()
    .populate('owner')
    .then(clothingItem => {
      if (req.user._id !== clothingItem.owner._id) {
        const err = new Error('You do not have permission to perform this action.');
        err.status = FORBIDDEN;
        return next(err);
      }
      res.send({data: clothingItem});
    })
    .catch(err => {
      if (err.name === 'CastError') {
        err.status = BAD_REQUEST;
        err.message = 'Invalid data passed to the methods for deleting an item.';
      } else if (err.name === 'DocumentNotFoundError') {
        err.status = NOT_FOUND;
        err.message = 'Clothing item not found.';
      }
      next(err);
    });
};