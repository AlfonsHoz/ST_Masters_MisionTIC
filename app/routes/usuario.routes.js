const express = require('express');
const { check } = require('express-validator');

const { obtenerUsuarios, crearUsuario, eliminarUsuario, actualizarUsuario, buscarPorRol } = require('../controller/usuario.controller');

const { validarCampos } = require('../middlewares/validar_campos');

const router = express.Router();

const path = 'usuarios';

router.get(`/${path}`, obtenerUsuarios);

router.get(`/${path}/:rol`, buscarPorRol);

router.post(`/${path}`,
    [ // Middlewares
        check('identificacion', 'La identificación del usuario es obligatoria.').not().isEmpty(),
        check('identificacion', 'La identificación del usuario debe ser un valor numérico.').isNumeric(),
        check('identificacion', 'La identificación debe tener al menos 6 caracteres.').isLength({ min: 6 }),
        check('nombre', 'El nombre del usuario es obligatorio.').not().isEmpty(),
        check('rol', 'El rol del usuario es obligatorio.').not().isEmpty(),
        check('estado', 'El estado del usuario es obligatorio.').not().isEmpty(),
        check('password', 'La contraseña del usuario es obligatoria.').not().isEmpty(),
        validarCampos
    ],
    crearUsuario);

router.delete(`/${path}/:id`, eliminarUsuario);

router.put(`/${path}/:id`,
    [
        check('identificacion', 'La identificación del usuario es obligatoria.').not().isEmpty(),
        check('identificacion', 'La identificación del usuario debe ser un valor numérico.').isNumeric(),
        check('identificacion', 'La identificación debe tener al menos 6 caracteres.').isLength({ min: 6 }),
        check('nombre', 'El nombre del usuario es obligatorio.').not().isEmpty(),
        check('rol', 'El rol del usuario es obligatorio.').not().isEmpty(),
        check('estado', 'El estado del usuario es obligatorio.').not().isEmpty(),
        check('password', 'La contraseña del usuario es obligatoria.').not().isEmpty(),
        validarCampos
    ],
    actualizarUsuario);

module.exports = router;