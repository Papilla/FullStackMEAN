var router = require('express').Router();

router.get('/', function (req, res, next) {
    console.log(req.query);
    res.send('Recuperamos todos los productos');
});

router.get('/new', function (req, res, next) {
    // res.json({uno: 'uno', dos: 'dos'});
    res.download('./yoimiya.png');
});

router.get('/:productId', function (req, res, next) {
    const { productId } = req.params;
    res.send(`Recupero el producto con ID: ${productId}`)
});

router.post('/create', function (req, res, next) {
    console.log(req.body)
    res.send('Gestión de los datos del formulario');
});

module.exports = router;