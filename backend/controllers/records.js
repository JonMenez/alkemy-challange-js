const Record = require('../models/record');
const { formatAmount } = require('../helpers/formatAmount');


const getRecords = async (req, res) => {

    const record = await Record.findAll({
        attributes: { exclude: 'status' },
        where: { status: true },
        order: [
            ['date', 'DESC']
        ]
    });

    const balance = await Record.sum('amount', {
        where: { status: true }
    });

    const total = parseFloat(balance.toFixed(2));

    res.json({
        total,
        record
    });
}

const getRecordById = async (req, res) => {

    const { id } = req.params;
    const record = await Record.findByPk(id);

    res.json(record);

}

const createRecord = async (req, res) => {
    const userId = req.userId;
    const { description, amount, date, category, is_income, user_id } = req.body;

    const amounyFormatted = formatAmount(amount, is_income);

    const record = new Record({
        description,
        amount: amounyFormatted,
        date,
        category,
        is_income,
        user_id: userId
    });

    await record.save();

    res.json({
        msg: 'Record created',
        record: {
            id: record.id,
            description: record.description,
            amount: record.amount,
            date: record.date,
            category: record.category,
            is_income: record.is_income,
            user_id: record.user_id
        }
    });
}

const updateRecord = async (req, res) => {

    const { id } = req.params;
    const { description, amount, date, category, } = req.body;

    const record = await Record.findByPk(id);
    const amounyFormatted = formatAmount(amount, record.is_income);

    await record.update({
        description,
        amount: amounyFormatted,
        date,
        category,
    });

    res.json({
        msg: 'Record updated',
        record: {
            id: record.id,
            description: record.description,
            amount: record.amount,
            date: record.date,
            category: record.category,
        }
    });
}

const deleteRecord = async (req, res) => {

    const { id } = req.params;

    const record = await Record.findByPk(id);

    await record.update({
        status: false
    });

    res.json({
        msg: 'Record deleted'
    });
}

module.exports = {
    getRecords,
    getRecordById,
    createRecord,
    updateRecord,
    deleteRecord
}