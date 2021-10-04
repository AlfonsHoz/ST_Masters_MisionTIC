import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ListadoUsuarios from "../../components/ListadoUsuarios";
import ConsultarUsuario from "../../components/ConsultarUsuario";

const UsuariosPage = () => {
  return (
    <>
      <Navbar />
      <Header
        textoBoton="Nuevo usuario"
        texto="usuarios"
        link="/usuarios/registrar"
      />
      <ConsultarUsuario />
      <ListadoUsuarios />
    </>
  );
};

export default UsuariosPage;
