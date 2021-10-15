import React from "react";
import "../../styles/editventprods.css";
import ojo from "./images/ojo.svg";
import borrar from "./images/eliminar.svg";
import { Link } from "react-router-dom";

const ProdsEditVent = ({ props }) => {
  const { codigo_producto, nombre_producto, precio_unitario, cantidad } = props;
  return (
    <ul className="edit-vent-prod-cont">
      <li id="li1-edv">{codigo_producto}</li>
      <li id="li2-edv">{nombre_producto}</li>
      <li id="li3-edv">{precio_unitario}</li>
      <li id="li4-edv">{cantidad}</li>
      <li id="li5-edv">
        <Link to={"/ventas/registrar"} >
          <img src={ojo} />
        </ Link>
        <img src={borrar} />
      </li>
    </ul>
  );
};

export default ProdsEditVent;