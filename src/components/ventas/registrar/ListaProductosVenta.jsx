import React from "react";
import eliminar from "../../../assets/img/eliminar.svg";
import { Link } from "react-router-dom";

export const ListaProductosVenta = ({ props }) => {
    const { codigo_producto, nombre_producto, precio_unitario, cantidad } = props;
    return (
        <tr>
            <td>{codigo_producto}</td>
            <td>{nombre_producto}</td>
            <td>{precio_unitario}</td>
            <td>{cantidad}</td>
            <td></td>
            <td>
                <img src={eliminar} alt='' />
            </td>
        </tr>
    );
};
