const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    codigo_producto: {
        type: String,
        required: [true, 'El código del producto es obligatorio.'],
        unique: true
    },
    nombre_producto: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio.']
    },
    precio_unitario: {
        type: Number,
        required: [true, 'El precio unitario es obligatorio.']
    }
},
    {
        versionKey: false
    });

module.exports = model("producto", productoSchema);