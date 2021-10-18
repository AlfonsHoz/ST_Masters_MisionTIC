const { response } = require("express");
const Producto = require("../models/producto");

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

exports.obtenerUnProducto = async (req, res = response) => {
  try {
    const filtro = req.params.filtro;
    const producto = await Producto.findOne({ codigo_producto: filtro });

    res.status(200).json({
      ok: true,
      msg: "Producto encontrado",
      producto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};

exports.obtenerCoincidenciasProducto = async (req, res = response) => {
  try {
    const filtro = req.params.filtro;
    const producto = await Producto.find({
      codigo_producto: new RegExp(filtro, "i"),
    });

    res.status(200).json({
      ok: true,
      msg: "Producto encontrado",
      producto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};

exports.crearProducto = async (req, res = response) => {
  const { codigo_producto, nombre_producto, precio_unitario, estado } =
    req.body;

  try {
    let producto = await Producto.findOne({ codigo_producto });
    console.log(producto);
    if (producto) {
      return res.json({
        ok: false,
        msg: "Ya se encuentra registrado un producto con este código.",
      });
    }

    producto = new Producto({
      codigo_producto,
      nombre_producto,
      precio_unitario,
      estado,
    });

    await producto.save();

    res.status(201).json({
      ok: true,
      msg: "registro",
      producto,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno, por favor hable con el administrador.",
    });
  }
};

exports.actualizarProducto = async (req, res = response) => {
  //
  const id = req.params.id;

  try {
    let producto = await Producto.findOne({ codigo_producto: id });

    if (!producto) {
      return res.json({
        ok: false,
        msg: `No existe el producto con codigo (${id}).`,
      });
    }

    const nuevoProducto = {
      ...req.body,
    };

    const productoActualizado = await Producto.findOneAndUpdate(
      { codigo_producto: id },
      nuevoProducto
    );

    res.status(201).json({
      ok: true,
      msg: "Producto actualizado exitosamente.",
      producto: productoActualizado,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};

exports.eliminarProducto = async (req, res = response) => {
  const id = req.params.id;
  try {
    let producto = await Producto.findOne({ codigo_producto: id });

    if (!producto) {
      return res.status(404).json({
        ok: false,
        msg: `No existe el producto con código (${id})`,
      });
    }
    await Producto.findOneAndRemove({ codigo_producto: id });

    res.status(200).json({
      ok: true,
      msg: "Producto eliminado exitosamente",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador",
    });
  }
};
