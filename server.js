require('dotenv').config();
const express = require('express')
const initDB = require('./config/db')
const app = express()

const port = process.env.PORT

const usuariosRoutes = require('./app/routes/usuario.routes')
const productosRoutes = require('./app/routes/producto.routes')

app.use(express.json());

app.use(express.urlencoded());

app.use(usuariosRoutes);
app.use(productosRoutes);


app.listen(port, () => {
    console.log('La aplicación está en linea en el puerto ' + port);
})

initDB();