const Product = require('../models/product.model');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

module.exports = {
    getAllProducts,
}