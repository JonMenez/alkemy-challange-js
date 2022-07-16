const User = require('../models/user');


const getUsers = async (req, res) => {

    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            msg: 'Error',
            error
        });
    }
}

const getUserById = (req, res) => {
    restart.json({
        mgs: 'users GET id'
    })
}

const createUser = (req, res) => {
    restart.json({
        mgs: 'users POST'
    })
}

const updateUser = (req, res) => {
    restart.json({
        mgs: 'users PUT'
    })
}

const deleteUser = (req, res) => {
    restart.json({
        mgs: 'users DELETE'
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
