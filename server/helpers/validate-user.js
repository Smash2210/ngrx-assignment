'use strict';
const jsonwebtoken = require('jsonwebtoken');
const { features: { unprotectedRoutes } } = require('../config/index');

const validateUser = () => {
    return (req, res, next) => {
        if (unprotectedRoutes.includes(req.originalUrl)) {
            next();
            return;
        }
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        const { email } = jsonwebtoken.decode(token);
        if (!email) {
            res.status(400).send({ success: false, message: 'invalid token' });
        }
        return next();
    }
};

module.exports = { validateUser };
