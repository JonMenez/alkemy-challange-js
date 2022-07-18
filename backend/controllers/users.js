const User = require('../models/user');


const getUsers = async (req, res) => {
    try {

        const users = await User.findAll({
            attributes: ['id', 'name', 'email'],
            where: {
                status: true
            },
            order: [
                ['id', 'ASC']
            ]
        });
        const total = await User.count()

        res.json({
            total,
            users
        });

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

        if (!user) {
            return res.status(404).json({
                msg: 'User not found'
            });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error',
            error
        });
    }
}

const createUser = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        const isExistUser = await User.findOne({
            where: {
                email
            }
        });

        if (isExistUser) {
            return res.status(400).json({
                msg: 'User already exists'
            });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        res.json({
            msg: 'User created',
            user
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Error',
            error
        });
    }
}

const updateUser = async (req, res) => {

    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `User id: ${id} not found`
            });
        }

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
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `User id: ${id} not found`
            });
        }

        user.update({ status: false });

        res.json({
            msg: 'User deleted',
            user
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Error',
            error
        });
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
