
import React, { useState, useEffect } from 'react';
import '../styles/registrarVenta.css';
import { TablaProductosVenta } from './TablaProductosVenta';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegistrarVenta = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db')
            .then(response => response.json())
            .then(dat => setdata(dat.productos));
    }, []);

    const mostrarMensaje = () => {
        toast.success('Venta registrada correctamente!', {
            position: 'bottom-center',
            background: '#191c1f !important',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div id="contenedor">
            <h2 id="tituloNuevaVenta">Nueva venta</h2>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="codigoVenta">Código de venta:</label>
                    <input className="campoGenerico" name="codigoVenta" type="text" placeholder="Ingresa el código" autoComplete="off" />
                </div>
                <div className="fecha campoLabel">
                    <label htmlFor="">Fecha de inicio:</label>
                    <input type="date" className="campoGenerico" placeholder="Selecciona la fecha" />
                </div>
                <div className="fecha campoLabel">
                    <label htmlFor="">Fecha de pago:</label>
                    <input type="date" className="campoGenerico" placeholder="Selecciona la fecha" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="estadoVenta">Estado de venta:</label>
                    <select name="estadoVenta" className="campoGenerico selector">
                        <option value="1">Creación</option>
                    </select>
                </div>
            </div>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="codigoVendedor">Identificación vendedor:</label>
                    <input className="campoGenerico campoDesactivado" name="codigoVendedor" type="text" readOnly />
                </div>
                <div className="campoLabel">
                    <label htmlFor="vendedor">Vendedor:</label>
                    <input id="campoVendedor" className="campoGenerico campoDesactivado campoLargo" name="vendedor" type="text" readOnly />
                </div>
            </div>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="producto">Producto:</label>
                    <input className="campoGenerico campoLargo" name="codigoVenta" type="text" placeholder="Ingresa el código o nombre del producto" autoComplete="off" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="cantidadProducto">Código de venta:</label>
                    <input className="campoGenerico" name="cantidadProducto" type="text" placeholder="Ingresa la cantidad" autoComplete="off" />
                </div>
                <button className="boton-generico">Agregar producto</button>
            </div>
            <div id="contenedorListadoProductos">
                <div id="tablaProductos">
                    <table>
                        <thead>
                            <tr>
                                <th>Código Producto</th><th>Nombre Producto</th><th>Precio Unitario</th><th>Cantidad</th><th>Precio Total</th><th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((datos, key) => {
                                    return <TablaProductosVenta key={key} props={datos} />;
                                })
                            }
                        </tbody>
                        <button id="boton-registrar-venta" className="boton-generico-header"
                            onClick={mostrarMensaje}
                        >Agregar venta</button>
                    </table>
                    <span id="volver">Volver arriba</span>
                </div>
            </div>
            <ToastContainer theme='dark' />
        </div>
    );
}
