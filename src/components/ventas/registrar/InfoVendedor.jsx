import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { axiosPetition, respuesta } from '../../../helper/fetch';
import { useRegistrarVentaContext } from '../../../context/registrarVentaContext';

export const InfoVendedor = ({ configMensaje }) => {

    const { nuevaVenta, setNuevaVenta } = useRegistrarVentaContext();
    const [nombreVendedor, setNombreVendedor] = useState(nuevaVenta.vendedor);
    const [idVendedor, setIdVendedor] = useState(nuevaVenta.id_vendedor);

    const id_vendedor = useRef('');
    const nombre_vendedor = useRef('');

    const resetSeller = () => {
        nombre_vendedor.current.value = '';
    }

    const handlerSearchOneSeller = async () => {

        const vendedor_busqueda = id_vendedor.current.value;
        setIdVendedor(id_vendedor.current.value);


        if (vendedor_busqueda !== '') {


            await axiosPetition(`usuarios/${vendedor_busqueda}`, 'GET');

            if (respuesta.ok) {
                if (respuesta.usuario !== null) {
                    nombre_vendedor.current.value = respuesta.usuario.nombre;
                    nuevaVenta.vendedor = respuesta.usuario.nombre;
                    nuevaVenta.id_vendedor = respuesta.usuario.identificacion;
                    setNombreVendedor(nombre_vendedor.current.value);
                } else {
                    resetSeller();
                    nuevaVenta.vendedor = '';
                    nuevaVenta.id_vendedor = '';
                }
            } else {
                resetSeller();
                nuevaVenta.vendedor = '';
                nuevaVenta.id_vendedor = '';
            }
        } else {
            resetSeller();
            nuevaVenta.vendedor = '';
            nuevaVenta.id_vendedor = '';
        }

        setNuevaVenta(nuevaVenta);
    }

    return (
        <>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="id_vendedor">Identificador del vendedor:</label>
                    <input
                        id="campoVendedor"
                        className="campoGenerico"
                        name="id_vendedor"
                        ref={id_vendedor}
                        value={idVendedor}
                        type="number"
                        placeholder="Ingrese el identificador del vendedor"
                        onChange={handlerSearchOneSeller} />
                </div>
                <div className="campoLabel">
                    <label htmlFor="vendedor">Nombre del vendedor:</label>
                    <input id="campoVendedor" className="campoGenerico campoDesactivado" name="vendedor" type="text" ref={nombre_vendedor} value={nombreVendedor} readOnly />
                </div>
            </div>
        </>
    )
}
