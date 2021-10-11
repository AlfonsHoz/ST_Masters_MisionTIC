import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ListadoUsuarios from "../../components/ListadoUsuarios";
import ConsultarUsuario from "../../components/ConsultarUsuario";
import { ConsultarUsuarioContext } from "../../context/consultarUsuarioContext";

const UsuariosPage = () => {

  const [consultaUsuario, setConsultaUsuario] = useState('');

  return (
    <>
      <ConsultarUsuarioContext.Provider value={{ consultaUsuario, setConsultaUsuario }}>
        <Navbar />
        <Header
          textoBoton='Nuevo usuario'
          texto='usuarios'
          link='/usuarios/registrar'
        />
        <ConsultarUsuario />
        <ListadoUsuarios />
      </ConsultarUsuarioContext.Provider>
    </>
  );
};

export default UsuariosPage;
