'use strict';

module.exports = {
    port: '3000',
    features: {
        jwt: true,
        secret: process.env.SECRET,
        unprotectedRoutes: [
            '/',
            '/api/login'
        ]
    },
    mockLoginCred: [
        {
            email: 'test@gmail.com',
            password: '098f6bcd4621d373cade4e832627b4f6'
        }
    ]
}