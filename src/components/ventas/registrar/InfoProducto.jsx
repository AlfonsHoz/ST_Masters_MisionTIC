import React, { useRef, useState } from 'react';
import { axiosPetition, respuesta } from '../../../helper/fetch';
import carrito from '../../../assets/carrito.svg';
import { toast } from 'react-toastify';
import { TablaProductosVenta } from './TablaProductosVenta';
import { useRegistrarVentaContext } from '../../../context/registrarVentaContext';
import { useHistory } from 'react-router-dom';

export const InfoProducto = ({ configMensaje }) => {

    const { nuevaVenta, setNuevaVenta } = useRegistrarVentaContext();

    const [productos, setProductos] = useState(nuevaVenta.productos);
    const [productoEncontrado, setProductoEncontrado] = useState();

    const history = useHistory();

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
        if (productoEncontrado !== undefined) {
            if (parseInt(cantidad_producto.current.value.trim()) > 0) {
                const { ...resto } = productoEncontrado;
                const cantidad = cantidad_producto.current.value;
                productos.push({ ...resto, cantidad });
                setProductos(productos);
                resetPrice();
                resetName();
                resetQuantity();
                resetSearch();
                setProductoEncontrado(null);
                filtro.current.focus();
                nuevaVenta.productos = productos;
                nuevaVenta.total += (parseInt(productoEncontrado.precio_unitario) * parseInt(cantidad));
                setNuevaVenta(nuevaVenta);
                console.log(nuevaVenta);
            } else {
                toast.error('Ingrese una cantidad válida, por favor.', configMensaje);
            }
        } else {
            toast.error('Busque un producto primero, por favor.', configMensaje);
        }
    }

    const registrarVenta = async (e) => {

        e.preventDefault();

        await axiosPetition('ventas', nuevaVenta, 'POST');

        if (respuesta.ok) {
            setNuevaVenta({
                fecha_venta: '',
                codigo: '',
                total: 0,
                email: '',
                vendedor: '',
                id_cliente: '',
                cliente: '',
                estado: 'En Proceso',
                productos: []
            });
            history.push('/ventas');
            toast.success('Venta registrada correctamente.', configMensaje);
        } else {
            toast.error(respuesta.msg, configMensaje);
        }
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
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                agregarProductos();
                            }
                        }}
                        type="number" placeholder="Ingresa la cantidad" autoComplete="off" />
                </div>
                <button id="btn-agregar-pdcto" className="boton-generico" onClick={agregarProductos}><img id="carrito" src={carrito} /></button>
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
            <button id="boton-registrar-venta" className="boton-generico-header"
                onClick={registrarVenta}
            >Agregar venta</button>
        </>
    );
}
