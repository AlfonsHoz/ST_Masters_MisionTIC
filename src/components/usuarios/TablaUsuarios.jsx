import React from "react";
import "../../styles/listadoUsuarios.css";
import lapiz from "../../assets/img/lapiz.svg";
import { Link } from "react-router-dom";
import { useUsuariosEditarContext } from "../../context/editarusuarioContext";

export const TablaUsuarios = ({ props }) => {
  const { usuariosEditar, setUsuariosEditar } = useUsuariosEditarContext();

  const { email, nombre, rol, estado } = props;

  const envioUsuario = () => {
    setUsuariosEditar({ email, nombre, rol, estado });
    console.log(usuariosEditar);
  };

  return (
    <tr>
      <td>{email}</td>
      <td>{nombre}</td>
      <td>{rol}</td>
      <td>{estado}</td>
      <td>
        <Link to='/usuarios/editar'>
          <img
            src={lapiz}
            id='boton-editar-usuarios'
            onClick={envioUsuario}></img>
        </Link>{" "}
      </td>
    </tr>
  );
};
