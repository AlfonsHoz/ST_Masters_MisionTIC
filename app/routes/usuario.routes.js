const express = require("express");
const { check } = require("express-validator");

const {
  obtenerUsuarios,
  crearUsuario,
  eliminarUsuario,
  actualizarUsuario,
  buscarPorRol,
  obtenerUnUsuario,
} = require("../controller/usuario.controller");

const { validarCampos } = require("../middlewares/validar_campos");

const router = express.Router();

const path = "usuarios";

router.get(`/${path}`, obtenerUsuarios);

router.get(`/${path}/:cod`, obtenerUnUsuario);

router.get(`/${path}/:rol?/:filtro?`, buscarPorRol);

router.post(
  `/${path}`,
  [
    // Middlewares
    check("email", "El email del usuario es obligatorio.").not().isEmpty(),
    check("nombre", "El nombre del usuario es obligatorio.").not().isEmpty(),
    check("rol", "El rol del usuario es obligatorio.").not().isEmpty(),
    check("estado", "El estado del usuario es obligatorio.").not().isEmpty(),
    validarCampos,
  ],
  crearUsuario
);

router.delete(`/${path}/:id`, eliminarUsuario);

router.put(
  `/${path}/:id`,
  [
    check("email", "El email del usuario es obligatoria.").not().isEmpty(),
    check("nombre", "El nombre del usuario es obligatorio.").not().isEmpty(),
    check("rol", "El rol del usuario es obligatorio.").not().isEmpty(),
    check("estado", "El estado del usuario es obligatorio.").not().isEmpty(),
    validarCampos,
  ],
  actualizarUsuario
);

module.exports = router;
