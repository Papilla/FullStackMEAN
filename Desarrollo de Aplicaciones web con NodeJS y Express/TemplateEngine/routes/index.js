var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    name: 'Rocío',
    available: false,
    animals: ['pájaro', 'perro', 'gato', 'león', 'elefante'],
  });
});

module.exports = router;
