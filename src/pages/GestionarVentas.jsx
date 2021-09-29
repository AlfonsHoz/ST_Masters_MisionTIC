import React from 'react';
import { Encabezado } from '../layouts/Encabezado';

export const GestionarVentas = () => {

    const infoHeader = {
        titulo: 'Gestionar ventas',
        contenido: 'En este módulo podrás consultar toda la información relacionada a las ventas.',
        boton: 'Nueva venta'
    }

    return (
        <>
            <Encabezado infoHeader={infoHeader}>
                
            </Encabezado>
        </>
    );
}
