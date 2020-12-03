'use strict';

module.exports = {
    port: '3000',
    features: {
        jwt: true,
        secret: process.env.SECRET,
        unprotectedRoutes: [
            '/',
            '/login'
        ]
    }
}