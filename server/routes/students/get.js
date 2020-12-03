'use strict';

const mockData = require('../../config/mock-data.json');

const listStudents = () => {
    return (req, res, next) => {
        res.status(200).send(mockData);
    }
}

module.exports = { listStudents }
