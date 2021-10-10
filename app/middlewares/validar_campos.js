const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {

    // Manejo de errores
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.json({
            ok: false,
            msg: errores.errors[0].msg
        });
    }

    next();
}

module.exports = {
    validarCampos
}
