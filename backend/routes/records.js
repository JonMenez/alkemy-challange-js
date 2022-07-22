const { Router } = require('express');
const { check } = require('express-validator');
const { getRecords, getRecordById, createRecord, updateRecord, deleteRecord } = require('../controllers/records');
const { validRecordID, validateInputs, validJWT } = require('../middlewares');

const router = Router();

router.get('/', getRecords);

router.get('/:id', [
    validRecordID,
], getRecordById);

router.post('/', [
    validJWT,
    check('description', 'Description is required').not().isEmpty(),
    check('amount', 'Amount is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('is_income', 'Is income is required').not().isEmpty(),
    validateInputs
], createRecord);

router.put('/:id', [
    validJWT,
    check('description', 'Description is required').not().isEmpty(),
    check('amount', 'Amount is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    validateInputs
], updateRecord);

router.delete('/:id', [
    validJWT,
    validRecordID,
], deleteRecord);


module.exports = router;