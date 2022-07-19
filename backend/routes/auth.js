const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const validateInputs = require('../middlewares/validateInputs');


const router = Router();

router.post('/login', [
    check('email', 'Email is not valid').isEmail(),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validateInputs
], login);


module.exports = router;