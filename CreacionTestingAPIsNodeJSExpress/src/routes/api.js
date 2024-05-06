const router = require('express').Router();

router.use('/places', require('./api/places'));

module.exports = router;