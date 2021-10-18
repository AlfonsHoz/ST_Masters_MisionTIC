import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { axiosPetition, respuesta } from '../../../helper/fetch';
import { useRegistrarVentaContext } from '../../../context/registrarVentaContext';

export const InfoVendedor = ({ configMensaje }) => {

    const { nuevaVenta, setNuevaVenta } = useRegistrarVentaContext();
    const [nombreVendedor, setNombreVendedor] = useState(nuevaVenta.vendedor);
    const [emailVendedor, setEmailVendedor] = useState(nuevaVenta.email);

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
                    nuevaVenta.vendedor = respuesta.usuario.nombre;
                    nuevaVenta.email = respuesta.usuario.email;
                    setNombreVendedor(nombre_vendedor.current.value);
                } else {
                    resetSeller();
                    nuevaVenta.vendedor = '';
                    nuevaVenta.email = '';
                }
            } else {
                resetSeller();
                nuevaVenta.vendedor = '';
                nuevaVenta.email = '';
            }
        } else {
            resetSeller();
            nuevaVenta.vendedor = '';
            nuevaVenta.email = '';
        }

        setNuevaVenta(nuevaVenta);
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
