import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import ConsultarVentas from '../../components/ventas/consultar/ConsultarVentas'
import TablaVentas from '../../components/ventas/consultar/TablaVentas'

const VentasPage = () => {

  return (
    <>
      <Navbar />
      <Header textoBoton={"Nueva venta"} texto={"ventas"} link={"/ventas/registrar"} />
      <ConsultarVentas />
      <TablaVentas />
    </>
  )
}

export default VentasPage
