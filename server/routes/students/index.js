
'use strict';

const routes = require('express').Router({ mergeParams: true })
const { listStudents } = require('./get');

module.exports = () => {
    routes.get('/', listStudents());
    return routes
}
