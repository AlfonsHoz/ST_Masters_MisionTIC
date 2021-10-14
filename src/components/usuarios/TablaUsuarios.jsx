import React from "react";
import "../../styles/listadoUsuarios.css";
import lapiz from "../../assets/img/lapiz.svg";
import { Link } from "react-router-dom";
import { useUsuariosEditarContext } from "../../context/editarusuarioContext";

export const TablaUsuarios = ({ props }) => {

  const { usuariosEditar, setUsuariosEditar } = useUsuariosEditarContext();

  const { identificacion, nombre, rol, estado } = props;

  const envioUsuario = () => {
    setUsuariosEditar({ identificacion, nombre, rol, estado });
    console.log(usuariosEditar);
  }

  return (
    <tr>
      <td>{identificacion}</td>
      <td>{nombre}</td>
      <td>{rol}</td>
      <td>{estado}</td>
      <td>
        <Link to='/usuarios/editar'>
          <img
            src={lapiz}
            id='boton-editar-usuarios'
            onClick={envioUsuario} >
          </img>
        </Link>{" "}
      </td>
    </tr>
  );
};
