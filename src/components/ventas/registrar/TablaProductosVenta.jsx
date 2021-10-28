import React from 'react';
import { Table } from 'react-bootstrap';
import { useRegistrarVentaContext } from '../../../context/registrarVentaContext';
import { ListaProductosVenta } from './ListaProductosVenta';

export const TablaProductosVenta = ({ listaProductos = {} }) => {

    const { nuevaVenta, setNuevaVenta } = useRegistrarVentaContext();

    return (
        <Table id="tabla-registrar-venta" striped hover variant="dark" className="text-center">
            <thead>
                <tr>
                    <th>Código Producto</th><th>Nombre Producto</th><th>Precio Unitario</th><th>Cantidad</th><th>Subtotal</th><th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaProductos?.map((datos, key) => {
                        return <ListaProductosVenta key={key} props={datos} />;
                    })
                }
                <tr>
                    <td><span id="total">TOTAL:</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{nuevaVenta.total}</td>
                </tr>
            </tbody>
        </Table>
    )
}
