import React from 'react'
import { useConsultarVentaContext } from '../../../context/consultarVentaContext';
import '../../../styles/consultarventas.css';
import { useForm } from '../../../hooks/useForm';

const ConsultarVentas = () => {

  const { setConsultaVenta } = useConsultarVentaContext();

  const [formFindVentaValues, handleFindVentaInputChange] = useForm({
    busqueda: ''
  });

  const { busqueda } = formFindVentaValues;

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
              <input className="campoConsultarVenta" id="ingreseDatos" type="text" value={busqueda} onChange={handleFindVentaInputChange} name="busqueda" placeholder="Ingrese datos"></input>
            </div>
          </div>
          <button
            id="botonConsultarVentas"
            className="boton-generico-header"
            onClick={(e) => {
              setConsultaVenta(busqueda);
              e.preventDefault();
            }}
          >Consultar</button>
        </form>
      </div>
    </div>

  )

}

export default ConsultarVentas
