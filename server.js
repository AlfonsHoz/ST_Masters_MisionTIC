require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const initDB = require('./config/db')
const app = express()

const port = process.env.PORT

const userRouters = require('./app/routes/usuario.routes')
const productoRouters = require('./app/routes/producto.routes')

app.use(
    bodyParser.json({
        limit: '20mb'
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)
app.use(userRouters)
app.use(productoRouters)


app.listen(port, () => {
    console.log('La aplicación está en linea');
})

initDB()