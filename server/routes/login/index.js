 
'use strict';

const routes = require('express').Router({ mergeParams: true })
const { login } = require('./post');

module.exports = () => {
    routes.post('/', login());
    return routes
}
