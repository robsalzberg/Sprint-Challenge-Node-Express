const express = require('express')

const app = express()

const port = 4100;

app.listen(port, () => console.log(`Listening on port ${port}`))