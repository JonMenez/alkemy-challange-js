const { Sequelize } = require('sequelize');

const database = new Sequelize('postgresql://postgres:ofMlz61IixIlukpT9pXK@containers-us-west-26.railway.app:5697/railway');

module.exports = database;
