
import React from 'react';
import '../styles/header.css';

export const Header = () => {
    return (
        <section>
            <header>
                <div className="contenido">
                    <h2 id="tituloHeader">Gestionar ventas</h2>
                    <p>En este módulo podrás consultar toda la información relacionada a las ventas.</p>
                    <button id="boton-header">Nueva venta</button>
                </div>
            </header>
        </section>
    );
}
