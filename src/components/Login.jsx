import React from "react";
import "../styles/login.css";
import logo from "../assets/img/logo.svg";
import logo_google from "../assets/img/logo-google.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section id="login">
      <div id="col-izq">
        <div id="content-izq">
          <h3>Bienvenido a</h3>
          <h1 id="titulo-principal">ST Masters</h1>
          <form id="formulario" action="">
            <label htmlFor="usuario">Usuario:</label>
            <input type="text" placeholder="Ingresa tu nombre de usuario" />
            <label htmlFor="contraseña">Contraseña:</label>
            <input type="password" placeholder="Ingresa tu contraseña" />
            <div id="ayudas">
              <div id="checkbox">
                <input type="checkbox" name="recordar" id="recordar" />{" "}
                <span id="texto-checkbox">Recuérdame</span>
              </div>
              <a id="olvido-contraseña" href="#">
                Olvidé mi contraseña
              </a>
            </div>
            <Link to="/ventas">
              <button id="boton-login" class="boton-generico" type="submit">
                Iniciar sesión
              </button>
            </Link>
            <Link to={"/ventas"}>
              <button id="boton-gmail" class="boton-generico" type="submit">
                <img id="logo_google" src={logo_google} alt="logo de google" />
                Iniciar con Gmail
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div id="col-der">
        <img id="logo" src={logo}></img>
        <h1>ST Masters</h1>
      </div>
    </section>
  );
};
