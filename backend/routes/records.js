const { Router } = require('express');
const { getRecords, getRecordById, createRecord, updateRecord, deleteRecord } = require('../controllers/records');

const router = Router();

router.get('/', getRecords);

router.get('/:id', getRecordById);

router.post('/', createRecord);

router.put('/:id', updateRecord);

router.delete('/:id', deleteRecord);


module.exports = router;