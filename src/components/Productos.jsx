import React from "react";
import "../styles/productos.css";
import { tr, td } from "react-bootstrap";
import { Link } from "react-router-dom"
import lapiz from "../assets/img/lapiz.svg";
import borrar from "./images/eliminar.svg";

const Productos = ({ props }) => {
  const { codigo_producto, nombre_producto, precio_unitario } = props;
  return (
    <tr>
      <td>{codigo_producto}</td>
      <td>{nombre_producto}</td>
      <td>{precio_unitario}</td>
      <td>
        <Link to={"/productos/editar"}>
          <img src={lapiz}></img>
        </Link>
        <img src={borrar}></img>
      </td>
    </tr >
  );
};

export default Productos;
