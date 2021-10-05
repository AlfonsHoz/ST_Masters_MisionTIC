import React from 'react'
import { Link } from 'react-router-dom';
import { useVentasContext } from '../context/ventasContext';
import '../styles/consultarventas.css';

const Consultarventas = () => {

  const {ventasConsultar, setVentasConsultar} = useVentasContext();

  return (
    <div className="consultarventas">
      <div id="texto-container">
        <h2 id="titulo-ventas">Consultar ventas</h2>
          <form id="formularioConsultarVentas" action=""> 
            <div id="contenedorConsultarVentas">
              <div className="campoLabel">
                <label htmlFor="favoriteOnly">Filtrar por:</label> 
                <select className="campoConsultarVenta" name="favoriteOnly" id="selector-ventas">
                  <option id="identificador">Identificador de la venta</option>
                  <option id="nombreUsuario">Nombre del usuario</option>
                  <option id="ID">Numero de identificacion del usuario</option>
                </select>
              </div>
              <div className="campoLabel">
                  <label htmlFor="ingreseDatos">Buscar:</label>
                  <input className="campoConsultarVenta" id="ingreseDatos" type="text" name="text" placeholder="Ingrese datos"></input>
            </div>
            </div>
                  <button
                    id="botonConsultarVentas"
                    className="boton-generico-header"
                    onClick={(e) => {
                      setVentasConsultar(!ventasConsultar);
                      e.preventDefault();
                    }}
                  >{ventasConsultar ? "Todas las ventas" : "Consultar" }</button>
          </form>
      </div>
    </div>

  )

}

export default Consultarventas
