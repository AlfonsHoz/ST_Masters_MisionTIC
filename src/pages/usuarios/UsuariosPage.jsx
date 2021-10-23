import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ListadoUsuarios from "../../components/usuarios/ListadoUsuarios";
import ConsultarUsuario from "../../components/usuarios/ConsultarUsuario";
import { ConsultarUsuarioContext } from "../../context/consultarUsuarioContext";

const UsuariosPage = () => {
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
