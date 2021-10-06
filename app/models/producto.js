const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    codigo_producto: String,
    nombre_producto: String,
    precio_unitario: Number,
    cantidad: Number,
});

module.exports = model("producto", productoSchema);