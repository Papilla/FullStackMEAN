var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.send('Lista de usuarios');
});

router.get('/edit', function(req, res, next) {
  res.send('Formulario de edición');
});

router.post('/update', function(req, res, next) {
  res.send('Gestión del formulario de edición');
});

module.exports = router;
