const { restart } = require("nodemon")


const getUsers = (req, res) => {


    restart.json({
        mgs: 'users GET'
    })
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
