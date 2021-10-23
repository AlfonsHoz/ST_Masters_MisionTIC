import React from "react";
import "../../styles/productos.css";
import lapiz from "../../assets/img/lapiz.svg";
import borrar from "../../assets/img/eliminar.svg";
import { Link } from "react-router-dom";
import { useProductosContext } from '../../context/productosContext';

const Productos = ({ props }) => {
  const { productoEditar, setProductoEditar } = useProductosContext();

  const { codigo_producto, nombre_producto, precio_unitario, estado } = props;

  const envioProducto = () => {
    setProductoEditar({
      codigo_producto,
      nombre_producto,
      precio_unitario,
      estado,
    });
  };

  const eliminarProducto = () => { };

  return (
    <tr>
      <td>{codigo_producto}</td>
      <td>{nombre_producto}</td>
      <td>{estado}</td>
      <td>{precio_unitario}</td>
      <td>
        <Link to='/productos/editar'>
          <img src={lapiz} onClick={envioProducto}></img>
        </Link>
      </td>
    </tr>
  );
};

export default Productos;
