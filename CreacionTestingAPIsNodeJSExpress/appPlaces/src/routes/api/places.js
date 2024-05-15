const router = require('express').Router();

const PlacesController = require('../../controllers/places.controller');

router.get('/', PlacesController.getAllPlaces);
router.post('/', PlacesController.createPlace);
router.put('/:placeId', PlacesController.updatePlace);
router.delete('/:placeId', PlacesController.deletePlace);

module.exports = router;