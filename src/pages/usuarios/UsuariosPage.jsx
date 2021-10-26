import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ListadoUsuarios from "../../components/usuarios/ListadoUsuarios";
import ConsultarUsuario from "../../components/usuarios/ConsultarUsuario";
import { ConsultarUsuarioContext } from "../../context/consultarUsuarioContext";
import { useRolContext } from "../context/rolContext";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../../helper/fetch";

const UsuariosPage = () => {
  const { setRolGlobal } = useRolContext();
  const { user } = useAuth0();

  useEffect(() => {
    await axiosPetition(`usuarios/${user.email}`);
    setRolGlobal(respuesta.rol);
  }, []);

  const [consultaUsuario, setConsultaUsuario] = useState("");

  return (
    <>
      <ConsultarUsuarioContext.Provider
        value={{ consultaUsuario, setConsultaUsuario }}>
        <Navbar />
        <Header
          textoBoton='Consultar usuario'
          texto='usuarios'
          link='/usuarios'
        />
        <ConsultarUsuario />
        <ListadoUsuarios />
      </ConsultarUsuarioContext.Provider>
    </>
  );
};

export default UsuariosPage;
