import React from "react";
import "../styles/productos.css";
import lapiz from "../assets/img/lapiz.svg";
import borrar from "../assets/img/eliminar.svg";
import { Link } from "react-router-dom";

const Productos = ({ props }) => {
  const { codigo_producto, nombre_producto, precio_unitario, Acciones } = props;
  return (
    <tr>
      <td>{codigo_producto}</td>
      <td>{nombre_producto}</td>
      <td>{precio_unitario}</td>
      <td>
        <Link to="/productos/editar">
          <img src={lapiz}></img>
        </Link>
        <img src={borrar}></img>
      </td>
    </tr>
  );
};

export default Productos;
