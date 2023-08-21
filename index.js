import 'dotenv/config.js';
// import { Server } from './models';
import Server from './models/server.js';

const server = new Server();

server.listen();

// const express = require('express');
// require('dotenv').config()
// const apiRouter = require('./routes/routes');
// const { dbConnection } = require('./database/config');
// const { Cupones } = require('./models');

// const app = express();
// const PORT = process.env.PORT;

// app.use(express.json());
// app.use('/api-whatsapp', apiRouter);

// const llamadoBase = async () => {
//     await dbConnection();
// }

// const iniciarServidor = async () => {
//     await llamadoBase();

//     app.listen(PORT, () => {
//         console.log(`Servidor corriendo en el puerto ${PORT}`);
//     });
// };

// iniciarServidor();
