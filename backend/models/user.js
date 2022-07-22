const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Record = require('../models/record');

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
    {
        timestamps: false
    }
);

//Associations
User.hasMany(Record, {
    foreignKey: 'user_id',
    as: 'records'
});

Record.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
}
);

module.exports = User;