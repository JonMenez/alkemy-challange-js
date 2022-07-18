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

const getUserById = async (req, res) => {

    const { id } = req.params;

    try {

        const user = await User.findByPk(id);

        res.json(user);

    } catch (error) {
        res.status(500).json({
            msg: 'Error',
            error
        });
    }
}

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log('body: ', req.body);
    try {

        const user = await User.create({
            name,
            email,
            password
        });

        res.json(user);

    } catch (error) {

        res.status(500).json({
            msg: 'Error',
            error
        });
    }
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
