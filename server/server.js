'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes');
const jwt = require('./middleware/jwt-authentication');
const { errorHandler } = require('./helpers/error-handler');
const { port } = config;
const bodyParser = require('body-parser');
const { validateUser } = require('./helpers/validate-user');

app.use(bodyParser.json());
app.use('/api', jwt.verify(), validateUser(), routes());

app.use(errorHandler);

app.listen(port, () => console.log(`Application listening on port: ${port}`));

