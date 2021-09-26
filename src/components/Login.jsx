import React from 'react';
import '../styles/login.css';

export const Login = () => {
    return (
        <section id="login">
        <div id="col-izq">
            <h3>Bienvenido a</h3>
            <h1 id="titulo-principal">ST Masters</h1>
            <form id="formulario" action="">
                <label htmlFor="usuario">Usuario:</label>
                <input type="text" placeholder="Ingresa tu nombre de usuario"/>
                <label htmlFor="contraseña">Contraseña:</label>
                <input type="password" placeholder="Ingresa tu contraseña"/>
                <div id="ayudas">
                <div id="checkbox">
                    <input type="checkbox" name="recordar" id="recordar" /> <span id="texto-checkbox">Recuérdame</span>
                </div>
                <div>
                    <a id="olvido-contraseña" href="#">Olvidé mi contraseña</a>
                </div>
                </div>
                <button id="boton-login" type="submit">Iniciar sesión</button>
            </form>
        </div>
        <div id="col-der">
            <h2>Guerrerooo guerreroo</h2>
        </div>
        </section>
    );
}
