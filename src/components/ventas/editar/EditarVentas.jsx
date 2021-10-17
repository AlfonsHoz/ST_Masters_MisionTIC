
import React, { useState } from 'react';
import '../../../styles/editarventas.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uno from '../../../assets/img/uno.png';
import uno_dorado from '../../../assets/img/uno_dorado.png';
import dos_dorado from '../../../assets/img/dos_dorado.png';
import dos from '../../../assets/img/dos.png';
import tres_dorado from '../../../assets/img/tres_dorado.png';
import tres from '../../../assets/img/tres.png';
import cuatro_dorado from '../../../assets/img/cuatro_dorado.png';
import cuatro from '../../../assets/img/cuatro.png';
import { InfoProducto } from './InfoProducto';
import { InfoVendedor } from './InfoVendedor';
import { InfoVenta } from './InfoVenta';
import { InfoCliente } from './InfoCliente';
import { axiosPetition, respuesta } from '../../../helper/fetch';
import { useEditarVentaContext } from '../../../context/editarVentaContext';

export const EditarVentas = ({ configMensaje }) => {

  const [componente, setComponente] = useState('InfoCliente');
  const { editarVenta, setEditarVenta } = useEditarVentaContext();


  const actualizarVenta = async (e) => {

    e.preventDefault();

    await axiosPetition(`ventas/${editarVenta.codigo}`, editarVenta, 'PUT');

    if (respuesta.ok) {
      setEditarVenta({
        fecha_venta: '',
        codigo: '',
        total: 0,
        id_vendedor: '',
        vendedor: '',
        id_cliente: '',
        cliente: '',
        estado: 'En Proceso',
        productos: []
      });
      setComponente('InfoCliente');
      toast.success('Venta actualizada correctamente.', configMensaje);
    } else {
      toast.error(respuesta.msg, configMensaje);
    }
  }

  return (
    <div id="contenedor">
      <h2 id="tituloNuevaVenta">Actualizar venta • <span className="seccionMenuVenta">{
        componente === 'InfoCliente' ?
          'Información del cliente'
          :
          componente === 'InfoVendedor' ?
            'Información del vendedor'
            :
            componente === 'InfoProducto' ?
              "Agregar productos"
              :
              "Información de la venta"
      }</span></h2>
      <div className="columna">
        <img className="itemMenuVenta" alt="imagen numero uno" src={
          componente === 'InfoCliente' ?
            uno_dorado
            :
            uno
        }
          onClick={() => setComponente('InfoCliente')} />
        <img className="itemMenuVenta" alt="imagen numero dos" src={
          componente === 'InfoVendedor' ?
            dos_dorado
            :
            dos
        }
          onClick={() => setComponente('InfoVendedor')} />
        <img className="itemMenuVenta" alt="imagen numero tres" src={
          componente === 'InfoProducto' ?
            tres_dorado
            :
            tres
        }
          onClick={() => setComponente('InfoProducto')} />
        <img className="itemMenuVenta" alt="imagen numero cuatro" src={
          componente === 'InfoVenta' ?
            cuatro_dorado
            :
            cuatro
        }
          onClick={() => setComponente('InfoVenta')} />

      </div>
      {
        componente === 'InfoCliente' ?
          <InfoCliente configMensaje={configMensaje} setComponente={setComponente} />
          :
          componente === 'InfoVendedor' ?
            <InfoVendedor configMensaje={configMensaje} />
            :
            componente === 'InfoProducto' ?
              <InfoProducto configMensaje={configMensaje} />
              :
              <InfoVenta configMensaje={configMensaje} />
      }
      <ToastContainer theme='dark' />
      <button id="boton-registrar-venta" className="boton-generico-header"
        onClick={actualizarVenta}
      >Actualizar venta</button>
    </div >
  );
}
