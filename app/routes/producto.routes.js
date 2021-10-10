const express = require('express');
const { check } = require('express-validator');

const { obtenerProductos, crearProducto } = require('../controller/producto.controller');

const { validarCampos } = require('../middlewares/validar_campos');

const router = express.Router();

const path = 'producto';

router.get(`/${path}`, obtenerProductos);

router.post(
    `/${path}`,
    [ // Middlewares
        check('codigo_producto', 'El código del producto es obligatorio.').not().isEmpty(),
        check('codigo_producto', 'El código del producto debe tener al menos 4 caracteres.').isLength({ min: 4 }),
        check('nombre_producto', 'El nombre del producto es obligatorio.').not().isEmpty(),
        check('nombre_producto', 'El nombre del producto debe tener al menos 4 caracteres.').isLength({ min: 4 }),
        check('precio_unitario', 'El precio unitario del producto es obligatorio.').not().isEmpty(),
        check('precio_unitario', 'El precio unitario debe ser un valor numérico.').isNumeric(),
        check('precio_unitario', 'El precio unitario debe tener al menos 3 caracteres.').isLength({ min: 3 }),
        validarCampos
    ],
    crearProducto);

module.exports = router;