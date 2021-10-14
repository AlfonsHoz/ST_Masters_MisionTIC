import React, { useRef } from 'react'
import { toast } from 'react-toastify';

export const InfoCliente = ({ configMensaje, setComponente }) => {

    const id_cliente = useRef('');
    const nombre_cliente = useRef('');

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

    return (
        <>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="id_cliente">Identificador del cliente:</label>
                    <input className="campoGenerico" name="id_cliente" ref={id_cliente} type="number" placeholder="Ingrese el identificador del cliente" autoComplete="off" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="cliente">Nombre del cliente:</label>
                    <input id="campoVendedor" className="campoGenerico" name="cliente" ref={nombre_cliente} type="text" placeholder="Ingrese el nombre del cliente" onKeyPress={cambiarComponente} />
                </div>
            </div>
        </>
    )
}
