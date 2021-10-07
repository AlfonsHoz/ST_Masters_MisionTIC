const { response } = require('express');
const Producto = require('../models/producto');

exports.obtenerProductos = async (req, res = response) => {

    const productos = await Producto.find();

    res.json({
        ok: true,
        productos
    });
}

exports.crearProducto = async (req, res) => {

    const { codigo_producto, nombre_producto, precio_unitario, cantidad } = req.body;

    try {

        let producto = await Producto.findOne({ codigo_producto });

        console.log(producto);

        if (producto) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya se encuentra registrado un producto con este código.'
            });
        }

        producto = new Producto({ codigo_producto, nombre_producto, precio_unitario, cantidad });

        await producto.save();

        res.json({
            ok: true,
            msg: 'registro',
            producto
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno, por favor hable con el administrador.'
        });
    }

}