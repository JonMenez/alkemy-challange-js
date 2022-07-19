const jwt = require('jsonwebtoken');

const validJWT = (req, res, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No token, authorization denied'
        });
    }

    try {
        jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        next();
    }
    catch (err) {
        res.status(401).json({
            msg: 'Token is not valid'
        });
    }
}

module.exports = validJWT;