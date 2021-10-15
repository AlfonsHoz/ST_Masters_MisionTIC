import React from "react";
import ojo from "../../../assets/img/ojo.svg";
import { Link } from "react-router-dom";

const ListaVentas = ({ props }) => {
  const { fecha_venta, codigo, total, vendedor } = props;
  return (
    <tr>
      <td>{fecha_venta}</td>
      <td>{codigo}</td>
      <td>{total}</td>
      <td>{vendedor}</td>
      <td>
        <Link to={"/ventas/editar"}>
          <img src={ojo} alt='' />
        </Link>
      </td>
    </tr>
  );
};

export default ListaVentas;
