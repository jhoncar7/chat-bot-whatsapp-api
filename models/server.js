import express from 'express';
import cors from 'cors';
import router from '../routes/routes.js';
import { dbConnection } from '../database/config.js';


export default class Server {
    
    constructor() {
        
        this.app = express();
        this.port = process.env.PORT;
        this.apiWhatsapp = '/api-whatsapp';

        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiWhatsapp, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}