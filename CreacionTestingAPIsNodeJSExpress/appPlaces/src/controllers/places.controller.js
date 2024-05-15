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
        const [places] = await Place.getById(result.insertId);
        res.json(places[0]);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

const updatePlace = async (req, res) => {
    try {
        const { placeId } = req.params;
        await Place.updateById(placeId, req.body);
        const [places] = await Place.getById(placeId);
        res.json(places[0]);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

const deletePlace = async (req, res) => {
    const { placeId } = req.params;
    try {
        await Place.deleteById(placeId, req.body);
        res.json({ success: 'Se ha borrado el place' });
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

module.exports = {
    getAllPlaces,
    createPlace,
    updatePlace,
    deletePlace,
};