import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import RegistroUsuarios from '../../components/usuarios/RegistroUsuarios';

const UsuariosRegistrarPage = () => {
    return (
        <>
            <Navbar />
            <Header textoBoton='Consultar usuario' texto='usuarios' link="/usuarios" />
            <RegistroUsuarios />
        </>
    );
}

export default UsuariosRegistrarPage;