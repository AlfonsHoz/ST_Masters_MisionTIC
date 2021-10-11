import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ConsultarUsuario from '../../components/ConsultarUsuario';
import ResConsultaUsuario from '../../components/ResConsultaUsuario';
import { ConsultarUsuarioContext } from '../../context/consultarUsuarioContext';

const UsuariosConsultarPage = () => {
    return (
        <>
            <ConsultarUsuarioContext.Provider values=''>
                <Navbar />
                <Header textoBoton='Nuevo usuario' texto='usuarios' link="/usuarios/registrar" />
                <ConsultarUsuario />
                <ResConsultaUsuario />
            </ConsultarUsuarioContext.Provider>
        </>
    );
}

export default UsuariosConsultarPage;
