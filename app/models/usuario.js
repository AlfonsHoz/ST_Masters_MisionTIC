const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    email: {
        type: String,
        required: [true, 'El email del usuario es obligatorio.'],
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'El nombre del usuario es obligatorio.']
    },
    rol: {
        type: String,
        required: [true, 'El rol del usuario es obligatorio.']
    },
    estado: {
        type: String,
        required: [true, 'El estado del usuario es obligatorio.']
    },
},
    {
        versionKey: false
    });

module.exports = model("usuarios", usuarioSchema);