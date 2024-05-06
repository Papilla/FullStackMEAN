const http = require('http');
const app = require('./src/app.js');
require('dotenv').config();

require('./src/config/db.js');
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor esuchando en puerto ${PORT}`);
});