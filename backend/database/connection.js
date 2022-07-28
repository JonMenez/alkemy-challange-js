const { Sequelize } = require('sequelize');

const database = new Sequelize(
    'monigerDB',
    'postgres',
    process.env.DB_PASSWORD,
    {
        host: 'https://alkemy-challange-js-production.up.railway.app',
        dialect: 'postgres',
    });

module.exports = database;
