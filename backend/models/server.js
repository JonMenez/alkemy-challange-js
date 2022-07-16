const express = require('express');
const usersRoutes = require('../routes/users');
const cors = require('cors');
const db = require('../database/connection');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            users: '/api/v1/users'
        }

        this.connectDB()
        this.middlewares()
        this.routes()
    }

    async connectDB() {
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors())
        //Static files
        this.app.use(express.static('public'));
        //Body parser
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.users, usersRoutes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;