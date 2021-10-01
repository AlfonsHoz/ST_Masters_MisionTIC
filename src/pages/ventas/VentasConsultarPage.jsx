import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Consultarventas from '../../components/Consultarventas'
import ResConsultaVentas from '../../components/ResConsultaVentas';

const VentasPage = () => {

  return (
    <>
      <Navbar />
      <Header textoBoton={"Nueva venta"} texto={"ventas"} link={"/ventas/registrar"} />
      <Consultarventas />
      <ResConsultaVentas />
    </>
  )
}

export default VentasPage