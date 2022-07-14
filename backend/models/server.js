const express = require('express');
const usersRoutes = require('../routes/users');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            users: '/api/v1/users'
        }

        this.routes()
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