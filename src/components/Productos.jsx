import React from "react";
import "../styles/productos.css";
import lapiz from "../assets/img/lapiz.svg";
import borrar from "../assets/img/eliminar.svg";

const Productos = ({ props }) => {
  const { codigo_producto, nombre_producto, precio_unitario, Acciones } = props;
  return (
    <tr>
      <td>{codigo_producto}</td>
      <td>{nombre_producto}</td>
      <td>{precio_unitario}</td>
      <td>
        <img src={lapiz}></img>
        <img src={borrar}></img>
      </td>
    </tr>
  );
};

export default Productos;
