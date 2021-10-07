const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    identificacion: {
        type: Number,
        required: [true, 'La identificación del usuario es obligatoria.'],
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
    password: {
        type: String,
        required: [true, 'La contraseña del usuario es obligatoria.']
    }
},
    {
        versionKey: false
    });

module.exports = model("usuarios", usuarioSchema);