import React from "react";
import eliminar from "../../../assets/img/eliminar.svg";

export const ListaProductosVenta = ({ props }) => {
  const { codigo_producto, nombre_producto, precio_unitario, cantidad } = props;

  const eliminarProducto = () => {

  }

  return (
    <>
      <tr>
        <td>{codigo_producto}</td>
        <td>{nombre_producto}</td>
        <td>{precio_unitario}</td>
        <td>{cantidad}</td>
        <td>{precio_unitario * cantidad}</td>
        <td>
          <img
            src={eliminar}
            alt=''
            onClick={eliminarProducto} />
        </td>
      </tr>
    </>
  );
};
