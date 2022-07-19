const validateInputs = require('../middlewares/validateInputs');
const validJWT = require('../middlewares/validToken');
const validID = require('../middlewares/validateID');

module.exports = {
    validateInputs,
    validJWT,
    validID
}