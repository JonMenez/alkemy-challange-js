const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateToken } = require('../helpers/generateToken');

const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            where: { email }
        });

        //Verify if user exists
        if (!user) {
            return res.status(400).json({
                msg: 'User not found'
            });
        }

        //Verify is user is active
        if (!user.status) {
            return response.status(400).json({
                msg: 'invalid email or password - status'
            })
        }

        //Verify if password is correct
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                msg: 'invalid email or password'
            });
        }

        //Create JWT
        const token = await generateToken(user.id);

        res.json({
            msg: 'Login successful',
            token
        })


    } catch (error) {
        res.status(500).json({
            msg: 'Server error'
        });
    }
}

module.exports = {
    login,
}