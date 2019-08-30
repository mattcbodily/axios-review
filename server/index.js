require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()
app.use(json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected')
})

app.get('/users', ctrl.getUsers)

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))