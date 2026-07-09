const express = require('express')
const connect_mongos = require('./db');
var cors = require('cors')

connect_mongos();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth/user', require('./routes/auth'))
app.use('/auth/notes', require('./routes/notes'))

module.exports = app;
