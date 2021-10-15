var jwt = require("express-jwt");
var jwks = require("jwks-rsa");
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

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://st-masters.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "api-autenticacion-st-masters",
  issuer: "https://st-masters.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(jwtCheck);

app.use(express.urlencoded());

app.use(usuariosRoutes);
app.use(productosRoutes);
app.use(ventasRoutes);

app.listen(port, () => {
  console.log("La aplicación está en linea en el puerto " + port);
});

initDB();
