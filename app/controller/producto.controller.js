const { response } = require("express");
const Producto = require("../models/producto");
const bcrypt = require("bcryptjs");

exports.obtenerProductos = async (req, res = response) => {
  try {
    const productos = await Producto.find();
    res.status(200).json({
      ok: true,
      msg: "Lista de productos",
      productos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};

exports.crearProducto = async (req, res) => {
  const { codigo_producto, nombre_producto, precio_unitario, cantidad } =
    req.body;

  try {
    let producto = await Producto.findOne({ codigo_producto });

    console.log(producto);

    if (producto) {
      return res.status(400).json({
        ok: false,
        msg: "Ya se encuentra registrado un producto con este código.",
      });
    }

    producto = new Producto({
      codigo_producto,
      nombre_producto,
      precio_unitario,
      cantidad,
    });

    await producto.save();

    res.json({
      ok: true,
      msg: "registro",
      producto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno, por favor hable con el administrador.",
    });
  }
};
