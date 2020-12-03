'use strict';

const { sign } = require('../../../middleware/jwt-authentication');
const { mockLoginCred } = require('../../../config');

const authenticateUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const res = mockLoginCred.filter((loginCred) => {
            return loginCred.email === email && loginCred.password === password;
        });
        if (res && res.length === 0) {
            resolve({ isLoggedIn: false, message: 'Incorrect user email or password!' })
        }
        const token = sign({ email, password });
        resolve({ isLoggedIn: true, token });
    });
}

module.exports = { authenticateUser };