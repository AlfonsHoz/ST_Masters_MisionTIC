const { Schema, model } = require('mongoose');

const ventaSchema = new Schema({
    codigo: {
        type: String,
        required: [true, 'El código de venta es obligatorio.'],
        unique: true
    },
    fecha_venta: {
        type: String,
        required: [true, 'La fecha de creación es obligatoria.']
    },
    estado: {
        type: String,
        required: [true, 'El estado de venta es obligatorio.']
    },
    total: {
        type: Number,
        required: [true, 'El total es obligatorio.']
    },
    id_cliente: {
        type: Number,
        required: [true, 'La cédula del cliente es obligatoria.']
    },
    cliente: {
        type: String,
        required: [true, 'El nonmbre del cliente es obligatorio.']
    },
    id_vendedor: {
        type: Number,
        required: [true, 'La cédula del vendedor es obligatoria.']
    },
    vendedor: {
        type: String,
        required: [true, 'El nombre del vendedor es obligatorio.']
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