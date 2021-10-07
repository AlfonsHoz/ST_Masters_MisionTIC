const Producto = require('../models/producto');

exports.getData = (req, res) => {
    Producto.find({}, (err, docs) => {
        res.send({
            docs
        });
        console.log(docs);
    });
}

exports.insertData = async (req, res) => {

    const { codigo_producto, nombre_producto, precio_unitario, cantidad } = req.body;
    const producto = { codigo_producto, nombre_producto, precio_unitario, cantidad };

    Producto.create(producto);

    res.json({
        ok: true,
        msg: 'registro',
        producto
    });
}