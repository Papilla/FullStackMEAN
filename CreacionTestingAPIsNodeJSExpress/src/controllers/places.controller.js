const Place = require('../models/place.model');

const getAllPlaces = async (req, res) => {
    try {
        const [places] = await Place.getAll();
        res.json(places);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

const createPlace = async (req, res) => {
    try {
        const [result] = await Place.insert(req.body);
        const [place] = await Place.getById(result.insertId);
        res.json(place[0]);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

const updatePlace = (req, res) => {
    res.json('Actualizamos un place');
}

const deletePlace = (req, res) => {
    res.json('Borramos un place');
}

module.exports = {
    getAllPlaces,
    createPlace,
    updatePlace,
    deletePlace,
};