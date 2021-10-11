import React from "react";
import "../styles/listadoUsuarios.css";
import eliminar from "../assets/img/eliminar.svg";
import lapiz from "../assets/img/lapiz.svg";
import { Link } from "react-router-dom";
import { useUsuariosEditarContext } from "../context/editarusuarioContext";

export const TablaUsuarios = ({ props }) => {
  const { setUsuariosEditar } = useUsuariosEditarContext();
  const {
    identificacion = "Sin coincidencias",
    nombre = "Sin coincidencias",
    rol = "Sin coincidencias",
    estado = "Sin coincidencias"
  } = props;

  return (
    <tr>
      <td>{identificacion}</td>
      <td>{nombre}</td>
      <td>{rol}</td>
      <td>{estado}</td>
      <td>
        <Link to='/usuarios/editar'>
          <button
            id='boton-editar-usuarios'
            onClick={() => setUsuariosEditar({ identificacion })}>
            <img src={lapiz} alt='' />
          </button>
        </Link>{" "}
        <img src={eliminar} alt='' />
      </td>
    </tr>
  );
};
