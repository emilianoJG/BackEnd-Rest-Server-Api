//archivo principal donde levanta el server. Solo se carga la instancia del server y el metodo listen

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();