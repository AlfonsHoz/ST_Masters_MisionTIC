import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/header.css';

const Header = ({ textoBoton, texto, link }) => {
    return (
        <section>
            <header>
                <div className="contenido">
                    <h2>{`Gestionar ${texto}`}</h2>
                    <p>{`En este módulo podrás consultar toda la información relacionada a ${texto}.`}</p>
                    <Link to={link}>
                        <button className="boton-generico-header">{textoBoton}</button>
                    </Link>
                </div>
            </header>
        </section>
    );
}

export default Header;