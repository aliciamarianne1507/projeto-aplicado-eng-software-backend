import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import routes from './src/routes/routes';
import './src/database';


class App {
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors())
        this.server.use(express.urlencoded({extended: true}));
        this.server.use(express.json());
    }

    routes(){
        this.server.use('/', routes);
    }
}

export default new App().server;
