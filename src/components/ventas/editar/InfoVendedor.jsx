import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { axiosPetition, respuesta } from '../../../helper/fetch';
import { useEditarVentaContext } from '../../../context/editarVentaContext';

export const InfoVendedor = ({ configMensaje }) => {

    const { editarVenta, setEditarVenta } = useEditarVentaContext();
    const [nombreVendedor, setNombreVendedor] = useState(editarVenta.vendedor);
    const [idVendedor, setIdVendedor] = useState(editarVenta.id_vendedor);

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
                    editarVenta.vendedor = respuesta.usuario.nombre;
                    editarVenta.id_vendedor = respuesta.usuario.identificacion;
                    setNombreVendedor(nombre_vendedor.current.value);
                } else {
                    resetSeller();
                    editarVenta.vendedor = '';
                    editarVenta.id_vendedor = '';
                }
            } else {
                resetSeller();
                editarVenta.vendedor = '';
                editarVenta.id_vendedor = '';
            }
        } else {
            resetSeller();
            editarVenta.vendedor = '';
            editarVenta.id_vendedor = '';
        }

        setEditarVenta(editarVenta);
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
