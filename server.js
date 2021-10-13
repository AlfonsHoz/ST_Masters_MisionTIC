require("dotenv").config();
const express = require("express");
const initDB = require("./config/db");
const app = express();
const Cors = require("cors");

const port = process.env.PORT;

const usuariosRoutes = require("./app/routes/usuario.routes");
const productosRoutes = require("./app/routes/producto.routes");
const ventasRoutes = require("./app/routes/venta.routes");

app.use(express.json());
app.use(Cors());

app.use(express.urlencoded());

app.use(usuariosRoutes);
app.use(productosRoutes);
app.use(ventasRoutes);

app.listen(port, () => {
  console.log("La aplicación está en linea en el puerto " + port);
});

initDB();
