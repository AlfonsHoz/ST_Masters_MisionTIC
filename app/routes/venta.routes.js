const express = require("express");
const { check } = require("express-validator");

const { obtenerVentas, crearVenta } = require("../controller/venta.controller");

const { validarCampos } = require("../middlewares/validar_campos");

const router = express.Router();

const path = "ventas";

router.get(`/${path}`, obtenerVentas);

router.post(`/${path}`,
    [
        check('codigo', 'El código de la venta es obligatorio.').not().isEmpty(),
        check('fecha_venta', 'La fecha de venta es obligatoria.').not().isEmpty(),
        check('estado', 'El estado de venta es obligatorio.').not().isEmpty(),
        check('total', 'El total de la venta es obligatorio.').not().isEmpty(),
        check('id_cliente', 'La identificación del cliente es obligatoria.').not().isEmpty(),
        check('id_cliente', 'La identificación del cliente debe tener al menos 6 caracteres.').isLength({ min: 6 }),
        check('cliente', 'El nombre del cliente es obligatorio.').not().isEmpty(),
        check('cliente', 'El nombre del cliente debe tener al menos 4 caracteres.').isLength({ min: 4 }),
        check('id_vendedor', 'El identificador del vendedor es obligatorio.').not().isEmpty(),
        check('vendedor', 'El nombre del vendedor es obligatorio.').not().isEmpty(),
        check('productos', 'La venta debe tener una lista de productos.').isArray(),
        check('productos', 'La venta debe tener una lista de productos.').not().isEmpty(),
        validarCampos
    ],
    crearVenta);

module.exports = router;
