import React from "react";
import "../styles/productos.css";
import { tr, td } from "react-bootstrap";
import ojo from "./images/ojo.svg";
import lapiz from "../assets/img/lapiz.svg";
import borrar from "./images/eliminar.svg";

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

/*
<ul className="info-container">
<li id="li1">{codigo_producto}</li>
<li id="li2">{nombre_producto}</li>
<li id="li3">{precio_unitario}</li>
<li id="li4">
  {Acciones}
  <img src={ojo} />
  <img src={borrar} />
</li>
</ul>
*/
