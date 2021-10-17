import React from "react";
import ojo from "../../../assets/img/ojo.svg";
import { Link } from "react-router-dom";
import { useVentasContext } from "../../../context/ventasContext";

const ListaVentas = ({ props }) => {

  const { ventasEditar, setVentasEditar } = useVentasContext();

  const { fecha_venta, codigo, total, vendedor } = props;

  const envioVenta = () => {
    setVentasEditar(codigo);
  }

  return (
    <tr>
      <td>{fecha_venta}</td>
      <td>{codigo}</td>
      <td>{total}</td>
      <td>{vendedor}</td>
      <td>
        <Link to={"/ventas/editar"}>
          <img
            src={ojo}
            alt=''
            onClick={envioVenta} />
        </Link>
      </td>
    </tr>
  );
};

export default ListaVentas;
