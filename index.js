const express = require('express')
const action = require('./actions')
const projects = require('./projects')
const configureMiddleware = require("./middleware.js");

const server = express()
const port = 4100;

configureMiddleware(server);

server.get('/', (req,res) => res.send('Hello'))
server.use('/actions', action);
server.use('/projects',projects);

server.listen(port, () => console.log(`Listening on port ${port}`))