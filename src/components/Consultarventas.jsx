import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/consultarventas.css';

const Consultarventas = () => {

  return (
    <div className="Consultarventas">
      <div id="texto-container">
        <h2 id="titulo">Consultar Ventas</h2>
        <div id="Filtrar1">
          <span><h2 id="FiltrarPor">Filtrar por: </h2></span>
          <span><h2 id="Buscar">Buscar: </h2></span>
        </div>
        <div id="Filtrar2">
          <span>
            <select name="favoriteOnly" id="Selector">
              <option id="identificador">Identificador de la venta</option>
              <option id="nombreUsuario">Nombre del usuario</option>
              <option id="ID">Numero de identificacion del usuario</option>
            </select></span>
          <span><input id="IngreseDatos" type="text" name="text" placeholder="Ingrese datos">
          </input></span>
          <Link to={"/ventas/consultar"}>
            <button
              className="boton-generico-header"
            >Consultar</button>
          </Link>
        </div>
      </div>
    </div>

  )

}

export default Consultarventas
