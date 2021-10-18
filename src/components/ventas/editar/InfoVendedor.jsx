import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { axiosPetition, respuesta } from '../../../helper/fetch';
import { useEditarVentaContext } from '../../../context/editarVentaContext';

export const InfoVendedor = ({ configMensaje }) => {

    const { editarVenta, setEditarVenta } = useEditarVentaContext();
    const [nombreVendedor, setNombreVendedor] = useState(editarVenta.vendedor);
    const [emailVendedor, setEmailVendedor] = useState(editarVenta.email);

    const email = useRef('');
    const nombre_vendedor = useRef('');

    const resetSeller = () => {
        nombre_vendedor.current.value = '';
    }

    const handlerSearchOneSeller = async () => {

        const vendedor_busqueda = email.current.value;
        setEmailVendedor(email.current.value);


        if (vendedor_busqueda !== '') {


            await axiosPetition(`usuarios/${vendedor_busqueda}`, 'GET');

            if (respuesta.ok) {
                if (respuesta.usuario !== null) {
                    nombre_vendedor.current.value = respuesta.usuario.nombre;
                    editarVenta.vendedor = respuesta.usuario.nombre;
                    editarVenta.email = respuesta.usuario.email;
                    setNombreVendedor(nombre_vendedor.current.value);
                } else {
                    resetSeller();
                    editarVenta.vendedor = '';
                    editarVenta.email = '';
                }
            } else {
                resetSeller();
                editarVenta.vendedor = '';
                editarVenta.email = '';
            }
        } else {
            resetSeller();
            editarVenta.vendedor = '';
            editarVenta.email = '';
        }

        setEditarVenta(editarVenta);
    }

    return (
        <>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="email">Email del vendedor:</label>
                    <input
                        id="campoVendedor"
                        className="campoGenerico"
                        name="email"
                        ref={email}
                        value={emailVendedor}
                        type="text"
                        placeholder="Ingrese el email del vendedor"
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
