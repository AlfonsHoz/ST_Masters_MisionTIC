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
