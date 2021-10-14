import React, { useRef, useState } from 'react';
import { axiosPetition, respuesta } from '../../../helper/fetch';
import { toast } from 'react-toastify';
import { TablaProductosVenta } from './TablaProductosVenta';

export const InfoProducto = ({ configMensaje }) => {

    const [productos, setProductos] = useState([]);
    const [productoEncontrado, setProductoEncontrado] = useState();

    const filtro = useRef('');
    const valor_unitario = useRef('');
    const nombre_producto = useRef('');
    const cantidad_producto = useRef('');

    const resetPrice = () => {
        valor_unitario.current.value = '';
    }

    const resetName = () => {
        nombre_producto.current.value = '';
    }

    const resetQuantity = () => {
        cantidad_producto.current.value = '';
    }

    const resetSearch = () => {
        filtro.current.value = '';
    }

    const handleSearchOneProduct = async () => {

        const filtro_busqueda = filtro.current.value;

        if (filtro_busqueda.trim() !== '') {

            await axiosPetition(`producto/${filtro_busqueda}`, 'GET');

            if (respuesta.ok) {
                if (respuesta.producto !== null) {
                    setProductoEncontrado(respuesta.producto);
                    valor_unitario.current.value = respuesta.producto.precio_unitario;
                    nombre_producto.current.value = respuesta.producto.nombre_producto;
                } else {
                    resetPrice();
                    resetName();
                }
            } else {
                setProductoEncontrado(null);
                resetPrice();
                resetName();
            }
        } else {
            setProductoEncontrado(null);
            resetPrice();
            resetName();
        }
    }

    const agregarProductos = () => {
        const { ...resto } = productoEncontrado;
        const cantidad = cantidad_producto.current.value;
        setProductos([...productos, { ...resto, cantidad }]);
        resetPrice();
        resetName();
        resetQuantity();
        resetSearch();
        setProductoEncontrado(null);
        filtro.current.focus();
        console.log(productos);
    }

    return (
        <>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="filtro">Producto:</label>
                    <input className="campoGenerico" name="filtro"
                        ref={filtro}
                        onChange={handleSearchOneProduct}
                        type="text" placeholder="Ingresa el identificador o nombre" autoComplete="off" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="valor_unitario">Nombre producto:</label>
                    <input className="campoGenerico campoDesactivado" name="valor_unitario" ref={nombre_producto} readOnly />
                </div>
                <div className="campoLabel">
                    <label htmlFor="valor_unitario">Valor unitario:</label>
                    <input className="campoGenerico campoDesactivado" name="valor_unitario" ref={valor_unitario} readOnly />
                </div>
                <div className="campoLabel">
                    <label htmlFor="cantidadProducto">Cantidad:</label>
                    <input className="campoGenerico" name="cantidadProducto" ref={cantidad_producto}
                        // onKeyPress={agregarProductos}
                        type="number" placeholder="Ingresa la cantidad" autoComplete="off" />
                </div>
                <button className="boton-generico" onClick={agregarProductos}>Agregar producto</button>
            </div>
            <div id="contenedorListadoProductos">
                <div id="tablaProductos">
                    {
                        productos.length > 0 ?
                            <TablaProductosVenta listaProductos={productos} />
                            :
                            ``
                    }
                </div>
            </div>
        </>
    );
}
