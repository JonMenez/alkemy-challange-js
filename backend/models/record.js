const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Record = sequelize.define('record', {
    description: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
    },
    date: {
        type: DataTypes.DATEONLY
    },
    category: {
        type: DataTypes.STRING
    },
    is_income: {
        type: DataTypes.BOOLEAN
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
    {
        timestamps: false
    }
);

module.exports = Record;