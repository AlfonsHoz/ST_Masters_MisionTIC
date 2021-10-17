import React, { useState, useRef } from 'react';
import { useEditarVentaContext } from '../../../context/editarVentaContext';

export const InfoVenta = () => {

    const { editarVenta, setEditarVenta } = useEditarVentaContext();

    const [idVenta, setIdVenta] = useState(editarVenta.codigo);
    const [fechaVenta, setFechaVenta] = useState(editarVenta.fecha_venta);
    const [estadoVenta, setEstadoVenta] = useState(editarVenta.estado);
    const [totalVenta, setTotalVenta] = useState(editarVenta.total);

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
        editarVenta.codigo = id;
        editarVenta.fecha_venta = fecha;
        editarVenta.estado = estado;
        editarVenta.total = total;
        setEditarVenta(editarVenta);
        console.log(editarVenta);
    }

    return (
        <>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="codigo">Identificador único de venta:</label>
                    <input className="campoGenerico campoDesactivado" name="codigo" ref={id_venta} value={idVenta} onChange={agregarVenta} type="number" autoComplete="off" readOnly />
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
