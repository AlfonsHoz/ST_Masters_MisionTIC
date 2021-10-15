import React, { useState, useRef } from 'react';
import { useForm } from "../../../hooks/useForm";
import { axiosPetition, respuesta } from '../../../helper/fetch';
import { useRegistrarVentaContext } from '../../../context/registrarVentaContext';

export const InfoVenta = () => {

    const { nuevaVenta, setNuevaVenta } = useRegistrarVentaContext();

    const [idVenta, setIdVenta] = useState(nuevaVenta.codigo);
    const [fechaVenta, setFechaVenta] = useState(nuevaVenta.fecha_venta);
    const [estadoVenta, setEstadoVenta] = useState(nuevaVenta.estado);
    const [totalVenta, setTotalVenta] = useState(nuevaVenta.total);

    const id_venta = useRef('');
    const fecha_venta = useRef('');
    const estado_venta = useRef('');
    const total_venta = useRef('');

    const agregarVenta = () => {
        const id = id_venta.current.value;
        const fecha = fecha_venta.current.value;
        const estado = estado_venta.current.value;
        const total = total_venta.current.value;
        setIdVenta(id);
        setFechaVenta(fecha);
        setEstadoVenta(estado);
        setTotalVenta(total);
        nuevaVenta.codigo = id;
        nuevaVenta.fecha_venta = fecha;
        nuevaVenta.estado = estado;
        nuevaVenta.total = total;
        setNuevaVenta(nuevaVenta);
        console.log(nuevaVenta);
    }

    return (
        <>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="codigo">Identificador único de venta:</label>
                    <input className="campoGenerico" name="codigo" ref={id_venta} value={idVenta} onChange={agregarVenta} type="number" placeholder="Ingresa el identificador de venta" autoComplete="off" />
                </div>
                <div className="fecha campoLabel">
                    <label htmlFor="fecha">Fecha de venta:</label>
                    <input name="fecha" ref={fecha_venta} value={fechaVenta} onChange={agregarVenta} type="date" className="campoGenerico" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="estado">Estado de venta:</label>
                    <select name="estado" ref={estado_venta} value={estadoVenta} onChange={agregarVenta} className="campoGenerico selector">
                        <option value="En Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>
                </div>
                <div className="campoLabel">
                    <label htmlFor="total">Total:</label>
                    <input className="campoGenerico campoDesactivado" name="total" type="number" ref={total_venta} value={totalVenta} onChange={agregarVenta} autoComplete="off" readOnly />
                </div>
            </div>
        </>
    )
}
