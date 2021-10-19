import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ListadoUsuarios from "../../components/usuarios/ListadoUsuarios";
import ConsultarUsuario from "../../components/usuarios/ConsultarUsuario";
import { ConsultarUsuarioContext } from "../../context/consultarUsuarioContext";
import { LoadingContext } from "../../context/loadingContext";

const UsuariosPage = () => {
  const [consultaUsuario, setConsultaUsuario] = useState("");
  const [loadingC, setLoadingC] = useState(true);

  return (
    <>
      <ConsultarUsuarioContext.Provider
        value={{ consultaUsuario, setConsultaUsuario }}>
        <LoadingContext.Provider value={{ loadingC, setLoadingC }}>
          <Navbar />
          <Header
            textoBoton='Nuevo usuario'
            texto='usuarios'
            link='/usuarios/registrar'
          />
          <ConsultarUsuario />
          <ListadoUsuarios />
        </LoadingContext.Provider>
      </ConsultarUsuarioContext.Provider>
    </>
  );
};

export default UsuariosPage;
