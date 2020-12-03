'use strict';

const express = require('express');
const routes = express.Router({ mergeParams: true });

module.exports = () => {
    routes.use('/', require('./health-check')());
    routes.use('/login', require('./login')());
    return routes;
}
