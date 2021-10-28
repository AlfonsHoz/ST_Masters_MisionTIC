import React from 'react';
import { Table } from 'react-bootstrap';
import { ListaProductosVenta } from './ListaProductosVenta';

export const TablaProductosVenta = ({ listaProductos = {} }) => {
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
                    <td>TOTAL:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>150000</td>
                </tr>
            </tbody>
        </Table>
    )
}
