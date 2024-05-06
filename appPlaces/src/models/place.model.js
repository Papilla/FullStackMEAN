const getAll = () => {
    return db.query('select * from places');
};

const insert = ({ titulo, descripcion, tamano, direccion, codigoPostal, precio }) => {
    return db.query('insert into places values (0, ?, ?, ?, ?, ?, ?, ?, ?)',
        [titulo, descripcion, tamano, direccion, codigoPostal, precio, new Date(), new Date()]);
}

const getById = (placeId) => {
    return db.query('select * from places where id = ?', [placeId]);
}

module.exports = {
    getAll,
    insert,
    getById,
}