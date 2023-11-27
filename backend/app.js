const express = require('express');
const cors = require('cors');
const { db } = require('./db/db.js')
const { readdirSync } = require('fs')

const app = express();

require('dotenv').config();

const PORT = process.env.PORT

// Middlerware
app.use(express.json())
app.use(cors())

//Routes anchalpaswan10 tCX7VkJIhw0OMLi3
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Server running to port:', PORT);
    })
}

server();