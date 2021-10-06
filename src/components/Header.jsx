import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = ({ textoBoton, texto, link }) => {
  return (
    <section>
      <header>
        <div id="contenido-header">
          <h2 id="tituloHeader">{`Gestionar ${texto}`}</h2>
          <p>{`En este módulo podrás consultar toda la información relacionada a ${texto}.`}</p>
          <Link id="header-link" to={link}>
            <button id="boton-header" className="boton-generico-header">{textoBoton}</button>
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Header;
