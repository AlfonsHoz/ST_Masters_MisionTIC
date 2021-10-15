const Venta = require("../models/venta");
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
  const { codigo, fecha_venta, estado, total, id_cliente, cliente, id_vendedor, vendedor, productos } = req.body;
  try {
    let venta = await Venta.findOne({ codigo });

    if (venta) {
      return res.json({
        ok: false,
        msg: `La venta con código '${codigo}' ya se encuentra registrada.`,
      });
    }

    venta = new Venta({ codigo, fecha_venta, estado, total, id_cliente, cliente, id_vendedor, vendedor, productos });

    await venta.save();

    res.status(201).json({
      ok: true,
      msg: "Registro de ventas"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno, hable con el administrador.",
    });
  }
};
