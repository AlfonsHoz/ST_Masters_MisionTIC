import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ConsultarUsuario from '../../components/ConsultarUsuario';
import ResConsultaUsuario from '../../components/ResConsultaUsuario';

const UsuariosConsultarPage = () => {
    return (
        <>
            <Navbar />
            <Header textoBoton='Nuevo usuario' texto='usuarios' link="/usuarios/registrar" />
            <ConsultarUsuario />
            <ResConsultaUsuario />
        </>
    );
}

export default UsuariosConsultarPage;
