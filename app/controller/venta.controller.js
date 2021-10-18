const Venta = require("../models/venta");
const Acum = require("../models/acum");
const { response } = require("express");

exports.obtenerVentas = async (req, res = response) => {
  try {
    const ventas = await Venta.find();
    res.status(200).json({
      ok: true,
      msg: "Lista de ventas",
      ventas,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};

exports.crearVenta = async (req, res = response) => {
  const {
    codigo,
    fecha_venta,
    estado,
    total,
    id_cliente,
    cliente,
    email,
    vendedor,
    productos,
  } = req.body;
  try {
    let venta = await Venta.findOne({ codigo });

    if (venta) {
      return res.json({
        ok: false,
        msg: `La venta con código '${codigo}' ya se encuentra registrada.`,
      });
    }

    venta = new Venta({
      codigo,
      fecha_venta,
      estado,
      total,
      id_cliente,
      cliente,
      email,
      vendedor,
      productos,
    });

    await venta.save();

    res.status(201).json({
      ok: true,
      msg: "Registro de ventas",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};

exports.obtenerUnaVenta = async (req, res = response) => {
  try {
    const busca = req.params.busca;
    const venta = await Venta.findOne({ codigo: busca });

    res.status(200).json({
      ok: true,
      msg: "Venta",
      venta,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};

exports.actualizarVenta = async (req, res = response) => {
  const cod = req.params.cod;

  try {
    let venta = await Venta.findOne({ codigo: cod });

    if (!venta) {
      return res.json({
        ok: false,
        msg: `No existe la venta con codigo (${cod}).`,
      });
    }

    const nuevaVenta = {
      ...req.body,
    };

    const ventaActualizada = await Venta.findOneAndUpdate(
      { codigo: cod },
      nuevaVenta
    );

    res.status(201).json({
      ok: true,
      msg: "Producto actualizado exitosamente.",
      producto: ventaActualizada,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};
