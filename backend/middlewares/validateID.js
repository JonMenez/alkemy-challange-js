const User = require('../models/user');

const validID = async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: 'User not found'
        });
    }

    next();
}

module.exports = validID;