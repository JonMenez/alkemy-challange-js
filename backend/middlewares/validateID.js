const Record = require('../models/record');
const User = require('../models/user');

const validUserID = async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: 'User not found'
        });
    }

    if (!user.status) {
        return res.status(400).json({
            msg: 'User is not active'
        });
    }

    next();
}

const validRecordID = async (req, res, next) => {
    const { id } = req.params;

    const record = await Record.findByPk(id);

    if (!record) {
        return res.status(404).json({
            msg: 'Record not found'
        });
    }

    if (!record.status) {
        return res.status(400).json({
            msg: 'Record is not active'
        });
    }

    next();
}

module.exports = {
    validUserID,
    validRecordID
};