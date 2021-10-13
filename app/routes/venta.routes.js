const express = require("express");
const { check } = require("express-validator");

const { obtenerVentas } = require("../controller/venta.controller");

const { validarCampos } = require("../middlewares/validar_campos");

const router = express.Router();

const path = "ventas";

router.get(`/${path}`, obtenerVentas);

module.exports = router;
