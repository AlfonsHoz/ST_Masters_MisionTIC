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
            </div>
            <div className="campoLabel">
              <label htmlFor="ingreseDatos">Buscar:</label>
              <input className="campoConsultarVenta" id="ingreseDatos" type="text" value={busqueda} onChange={handleFindVentaInputChange} name="busqueda" placeholder="Ingrese el identificador de venta"></input>
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
