import React from "react";
import "../styles/ventas.css";
import ojo from "../assets/img/ojo.svg";
import borrar from "../assets/img/eliminar.svg"
import { Link } from 'react-router-dom'

const Ventas = ({ props }) => {
  const { fecha, codigo, total, vendedor } = props;
  return (
    <ul className="info-cont">
      <li id="li1-li-vt">{fecha}</li>
      <li id="li2-li-vt">{codigo}</li>
      <li id="li3-li-vt">{total}</li>
      <li id="li4-li-vt">{vendedor}</li>
      <li id="li5-li-vt">
        <Link
          to={"/ventas/editar"}>
          <img src={ojo} alt="" />
        </Link>
        <img src={borrar} alt="" />
      </li>
    </ul>
  );
};

export default Ventas;
