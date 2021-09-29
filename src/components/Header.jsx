
import React from 'react';
import '../styles/header.css';

export const Header = ({titulo='Sin título', contenido='Sin contenido', boton='Sin texto'}) => {
    return (
        <section>
            <header>
                <div className="contenido">
                    <h2 id="tituloHeader">{titulo}</h2>
                    <p>{contenido}</p>
                    <button id="boton-header">{boton}</button>
                </div>
            </header>
        </section>
    );
}
