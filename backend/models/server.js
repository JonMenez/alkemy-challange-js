const express = require('express');
const cors = require('cors');
const authRoutes = require('../routes/auth');
const usersRoutes = require('../routes/users');
const recordsRoutes = require('../routes/records');
const db = require('../database/connection');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            auth: '/api/v1/auth',
            users: '/api/v1/users',
            records: '/api/v1/records',
        }

        this.connectDB()
        this.middlewares()
        this.routes()
    }

    async connectDB() {
        try {
            await db.sync({ alter: true });
            console.log('Database connected');
        } catch (error) {
            console.log(error);
            console.log('It could not connect to the database');
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
        this.app.use(this.paths.auth, authRoutes);
        this.app.use(this.paths.users, usersRoutes);
        this.app.use(this.paths.records, recordsRoutes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;