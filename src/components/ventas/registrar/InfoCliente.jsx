import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useRegistrarVentaContext } from '../../../context/registrarVentaContext';

export const InfoCliente = ({ configMensaje, setComponente }) => {

    const { nuevaVenta, setNuevaVenta } = useRegistrarVentaContext();
    const id_cliente = useRef();
    const nombre_cliente = useRef(nuevaVenta.nombre_cliente);
    const [idCliente, setIdCliente] = useState(nuevaVenta.id_cliente);
    const [nombreCliente, setNombreCliente] = useState(nuevaVenta.cliente);

    const cambiarComponente = (e) => {
        if (e.key === 'Enter') {
            if (id_cliente.current.value.trim() === '') {
                toast.error('Ingrese el identificador del cliente.', configMensaje);
            } else if (nombre_cliente.current.value.trim() === '') {
                toast.error('Ingrese el nombre del cliente.', configMensaje);
            } else {
                setComponente('InfoVendedor');
            }
        }
    }

    const agregarCliente = () => {
        setIdCliente(id_cliente.current.value);
        setNombreCliente(nombre_cliente.current.value);
        nuevaVenta.id_cliente = parseInt(id_cliente.current.value);
        nuevaVenta.cliente = nombre_cliente.current.value;
        setNuevaVenta(nuevaVenta);
        console.log(nuevaVenta);
    }

    return (
        <>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="id_cliente">Identificador del cliente:</label>
                    <input className="campoGenerico" name="id_cliente"
                        ref={id_cliente}
                        value={idCliente}
                        type="number"
                        onChange={agregarCliente}
                        placeholder="Ingrese el identificador del cliente" autoComplete="off" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="cliente">Nombre del cliente:</label>
                    <input id="campoVendedor" className="campoGenerico" name="cliente"
                        ref={nombre_cliente}
                        value={nombreCliente}
                        onChange={agregarCliente}
                        type="text" placeholder="Ingrese el nombre del cliente" onKeyPress={cambiarComponente} />
                </div>
            </div>
        </>
    )
}
