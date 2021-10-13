
import React, { useState, useEffect } from 'react';
import '../styles/registrarVenta.css';
import { TablaProductosVenta } from './TablaProductosVenta';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table } from 'react-bootstrap';

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
                    <label htmlFor="codigoVenta">Identificador único de venta:</label>
                    <input className="campoGenerico" name="codigoVenta" type="text" placeholder="Ingresa el identificador de venta" autoComplete="off" />
                </div>
                <div className="fecha campoLabel">
                    <label htmlFor="">Fecha de venta:</label>
                    <input type="date" className="campoGenerico" placeholder="Selecciona la fecha" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="estadoVenta">Estado de venta:</label>
                    <select name="estadoVenta" className="campoGenerico selector">
                        <option value="1">Creación</option>
                    </select>
                </div>
                <div className="campoLabel">
                    <label htmlFor="codigoVenta">Total:</label>
                    <input className="campoGenerico campoDesactivado" name="codigoVenta" type="text" value="0" autoComplete="off" readOnly />
                </div>
            </div>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="idCliente">Identificador del cliente:</label>
                    <input className="campoGenerico" name="idCliente" type="text" placeholder="Ingrese el identificador del cliente" autoComplete="off" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="cliente">Nombre del cliente:</label>
                    <input id="campoVendedor" className="campoGenerico" name="cliente" type="text" placeholder="Ingrese el nombre del cliente" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="idVendedor">Identificador del vendedor:</label>
                    <input id="campoVendedor" className="campoGenerico" name="idVendedor" type="text" placeholder="Ingrese el identificador del vendedor" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="vendedor">Nombre del vendedor:</label>
                    <input id="campoVendedor" className="campoGenerico campoDesactivado" name="vendedor" type="text" readOnly />
                </div>
            </div>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="producto">Producto:</label>
                    <input className="campoGenerico" name="codigoVenta" type="text" placeholder="Ingresa el identificador o nombre" autoComplete="off" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="valorUnitario">Valor unitario:</label>
                    <input className="campoGenerico" name="valorUnitario" type="text" placeholder="Ingresa la cantidad" autoComplete="off" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="cantidadProducto">Cantidad:</label>
                    <input className="campoGenerico" name="cantidadProducto" type="text" placeholder="Ingresa la cantidad" autoComplete="off" />
                </div>
                <button className="boton-generico">Agregar producto</button>
            </div>
            <div id="contenedorListadoProductos">
                <div id="tablaProductos">
                    <Table id="tabla-registrar-venta" striped hover variant="dark" className="text-center">
                        <thead>
                            <tr>
                                <th>Código Producto</th><th>Nombre Producto</th><th>Precio Unitario</th><th>Cantidad</th><th>Subtotal</th><th>Acciones</th>
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
                    </Table>
                    <span id="volver">Volver arriba</span>
                </div>
            </div>
            <ToastContainer theme='dark' />
        </div>
    );
}
