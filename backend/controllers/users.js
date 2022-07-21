const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const getUsers = async (req, res) => {

    const users = await User.findAll({
        attributes: ['id', 'name', 'email'],
        where: {
            status: true
        },
        order: [
            ['id', 'ASC']
        ]
    });

    const total = await User.count({
        where: {
            status: true
        }
    })

    res.json({
        total,
        users
    });
}

const getUserById = async (req, res) => {

    const { id } = req.params;
    const user = await User.findByPk(id);

    res.json(user);

}

const createUser = async (req, res) => {

    const { name, email, password } = req.body;

    const user = new User({
        name,
        email,
        password: await bcryptjs.hash(password, 10)
    });

    await user.save();

    res.json({
        msg: 'User created',
        user
    });
}

const updateUser = async (req, res) => {

    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const user = await User.findByPk(id);

        await user.update({
            name,
            email,
            password
        });

        res.json({
            msg: 'User updated',
            user
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Error',
            error
        });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    user.update({ status: false });

    res.json({
        msg: 'User deleted',
        user
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
