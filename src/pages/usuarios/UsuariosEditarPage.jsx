import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import EditarUsuarios from '../../components/EditarUsuarios';

const UsuariosEditarPage = () => {
    return (
        <>
            <Navbar />
            <Header textoBoton='Consultar usuario' texto='usuarios' link="/usuarios" />
            <EditarUsuarios />
        </>
    );
}

export default UsuariosEditarPage;
