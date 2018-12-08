const express = require('express')
const action = require('./actions')
const app = express()

const port = 4100;

app.get('/', (req,res) => res.send('Hello'))
app.use('/actions', action);

app.listen(port, () => console.log(`Listening on port ${port}`))