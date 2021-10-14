import React from 'react';
import { useForm } from "../../../hooks/useForm";
import { axiosPetition, respuesta } from '../../../helper/fetch';

export const InfoVenta = () => {

    const [formVentaValues, handleVentaInputChange, resetVentaForm] = useForm({
        identificador: '',
        fecha: '',
        estado: 'Pendiente',
        total: ''
    });

    const { identificador, fecha, estado, total } = formVentaValues;

    return (
        <>
            <div className="columna">
                <div className="campoLabel">
                    <label htmlFor="codigo">Identificador único de venta:</label>
                    <input className="campoGenerico" name="codigo" value={identificador} onChange={handleVentaInputChange} type="number" placeholder="Ingresa el identificador de venta" autoComplete="off" />
                </div>
                <div className="fecha campoLabel">
                    <label htmlFor="fecha">Fecha de venta:</label>
                    <input name="fecha" value={fecha} onChange={handleVentaInputChange} type="date" className="campoGenerico" />
                </div>
                <div className="campoLabel">
                    <label htmlFor="estado">Estado de venta:</label>
                    <select name="estado" value={estado} onChange={handleVentaInputChange} className="campoGenerico selector">
                        <option value="En Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>
                </div>
                <div className="campoLabel">
                    <label htmlFor="total">Total:</label>
                    <input className="campoGenerico campoDesactivado" name="total" type="number" value={total} onChange={handleVentaInputChange} autoComplete="off" readOnly />
                </div>
            </div>
        </>
    )
}
