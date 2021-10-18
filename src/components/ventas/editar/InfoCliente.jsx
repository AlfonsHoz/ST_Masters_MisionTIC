import React, { useRef, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useEditarVentaContext } from '../../../context/editarVentaContext';

export const InfoCliente = ({ configMensaje, setComponente }) => {

    const { editarVenta, setEditarVenta } = useEditarVentaContext();
    const [idCliente, setIdCliente] = useState(editarVenta.id_cliente);
    const [nombreCliente, setNombreCliente] = useState(editarVenta.cliente);
    const id_cliente = useRef();
    const nombre_cliente = useRef();

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

    useEffect(() => {
        setIdCliente(editarVenta.id_cliente);
        setNombreCliente(editarVenta.cliente);
    }, [editarVenta.id_cliente, editarVenta.cliente]);

    const agregarCliente = () => {
        setIdCliente(id_cliente.current.value);
        setNombreCliente(nombre_cliente.current.value);
        editarVenta.id_cliente = parseInt(id_cliente.current.value);
        editarVenta.cliente = nombre_cliente.current.value;
        setEditarVenta(editarVenta);
        console.log(editarVenta);
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
                        onKeyPress={cambiarComponente}
                        placeholder="Ingrese el identificador del cliente" autoComplete="off" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="cliente">Nombre del cliente:</label>
                    <input id="campoVendedor" className="campoGenerico" name="cliente"
                        ref={nombre_cliente}
                        value={nombreCliente}
                        onChange={agregarCliente}
                        type="text" placeholder="Ingrese el nombre del cliente"
                        onKeyPress={cambiarComponente}
                        autoComplete="off" />
                </div>
            </div>
        </>
    )
}
