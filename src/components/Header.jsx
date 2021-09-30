
import React from 'react';
import '../styles/header.css';

export const Header = ({ textoBoton, texto }) => {
    return (
        <section>
            <header>
                <div className="contenido">
                    <h2>{`Gestionar ${texto}`}</h2>
                    <p>{`En este módulo podrás consultar toda la información relacionada a ${texto}.`}</p>
                    <button className="boton-generico">{textoBoton}</button>
                </div>
            </header>
        </section>
    );
}
