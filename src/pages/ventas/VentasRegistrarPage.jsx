import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import { RegistrarVenta } from '../../components/ventas/registrar/RegistrarVenta';
import { RegistrarVentaContext } from '../../context/registrarVentaContext';

const VentasPage = () => {

  const [nuevaVenta, setNuevaVenta] = useState({
    fecha_venta: '',
    codigo: '',
    total: 0,
    id_vendedor: '',
    vendedor: '',
    id_cliente: '',
    cliente: '',
    estado: 'En Proceso',
    productos: []
  });

  return (
    <>
      <Navbar />
      <Header textoBoton={"Consultar ventas"} texto={"ventas"} link={"/ventas"} />
      <RegistrarVentaContext.Provider value={{ nuevaVenta, setNuevaVenta }}>
        <RegistrarVenta />
      </RegistrarVentaContext.Provider>
    </>
  )
}

export default VentasPage