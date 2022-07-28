const { Sequelize } = require('sequelize');

const database = new Sequelize(
    'monigerDB',
    'postgres',
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres',
    });

module.exports = database;
