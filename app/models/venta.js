const { Schema, model } = require('mongoose');

const ventaSchema = new Schema({
    codigo: {
        type: String,
        required: [true, 'El código de venta es obligatorio.'],
        unique: true
    },
    fecha: {
        type: String,
        required: [true, 'La fecha de creación es obligatoria.']
    },
    estado: {
        type: String,
        required: [true, 'El estado de venta es obligatorio.']
    },
    vendedor: {
        type: String,
        required: [true, 'El nombre del vendedor es obligatorio.']
    },
    id_usuario: {
        type: Number,
        required: [true, 'La cédula del usuario es obligatoria.']
    },
    productos: {
        type: Array,
        required: [true, 'No se puede registrar una venta sin productos.']
    }
},
    {
        versionKey: false
    });

module.exports = model("ventas", ventaSchema);