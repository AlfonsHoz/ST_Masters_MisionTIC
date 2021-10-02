import React from 'react';
import Navbar from '../components/Navbar';
import {Header} from '../components/Header';

export const Encabezado = ({children, infoHeader}) => {

    const {titulo, contenido, boton} = infoHeader;

    return (
        <>
            <Navbar />
            <Header titulo={titulo} contenido={contenido} boton={boton}/>
            <main>{children}</main>
        </>
    );
}
