import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { axiosPetition, respuesta } from '../../../helper/fetch';
import { useForm } from "../../../hooks/useForm";

export const InfoVendedor = ({ configMensaje }) => {

    const [nombreVendedor, setNombreVendedor] = useState('');

    const id_vendedor = useRef('');
    const nombre_vendedor = useRef('');

    const resetSeller = () => {
        nombre_vendedor.current.value = '';
    }

    const handlerSearchOneSeller = async () => {

        const vendedor_busqueda = id_vendedor.current.value;


        if (vendedor_busqueda !== '') {

            await axiosPetition(`usuarios/${vendedor_busqueda}`, 'GET');

            if (respuesta.ok) {
                if (respuesta.usuario !== null) {
                    nombre_vendedor.current.value = respuesta.usuario.nombre;
                } else {
                    resetSeller();
                }
            } else {
                resetSeller();
            }
        } else {
            resetSeller();
        }

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
                        type="number"
                        placeholder="Ingrese el identificador del vendedor"
                        onChange={handlerSearchOneSeller} />
                </div>
                <div className="campoLabel">
                    <label htmlFor="vendedor">Nombre del vendedor:</label>
                    <input id="campoVendedor" className="campoGenerico campoDesactivado" name="vendedor" type="text" ref={nombre_vendedor} readOnly />
                </div>
            </div>
        </>
    )
}
