import React from 'react';
import Navbar from '../components/Navbar';
import {Header} from '../components/Header';

export const Encabezado = ({children}) => {
    return (
        <>
            <Navbar />
            <Header />
            <main>{children}</main>
        </>
    );
}
