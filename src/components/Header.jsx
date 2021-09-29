
import React from 'react';
import '../styles/header.css';

export const Header = () => {
    return (
        <section>
            <header>
                <div className="contenido">
                    <h2>Gestionar ventas</h2>
                    <p>En este módulo podrás consultar toda la información relacionada a las ventas.</p>
                    <button class="boton-generico">Nueva venta</button>
                </div>
            </header>
        </section>
    );
}
