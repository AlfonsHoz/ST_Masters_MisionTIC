
import React, { useState } from 'react';
import '../../../styles/registrarVenta.css';
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
import { useRegistrarVentaContext } from '../../../context/registrarVentaContext';
import { axiosPetition, respuesta } from '../../../helper/fetch';

export const RegistrarVenta = () => {

    const [componente, setComponente] = useState('InfoCliente');
    const { nuevaVenta, setNuevaVenta } = useRegistrarVentaContext();

    const configMensaje = {
        position: "bottom-center",
        background: "#191c1f !important",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    };

    const registrarVenta = async (e) => {

        e.preventDefault();

        await axiosPetition('ventas', nuevaVenta, 'POST');

        if (respuesta.ok) {
            setNuevaVenta({
                fecha_venta: '',
                codigo: '',
                total: 0,
                email: '',
                vendedor: '',
                id_cliente: '',
                cliente: '',
                estado: 'En Proceso',
                productos: []
            });
            setComponente('InfoCliente');
            toast.success('Venta registrada correctamente.', configMensaje);
        } else {
            toast.error(respuesta.msg, configMensaje);
        }
    }

    return (
        <div id="contenedor">
            <h2 id="tituloNuevaVenta">Nueva venta • <span className="seccionMenuVenta">{
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
                onClick={registrarVenta}
            >Agregar venta</button>
        </div >
    );
}
