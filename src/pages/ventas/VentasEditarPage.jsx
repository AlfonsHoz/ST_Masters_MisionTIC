import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import EditarVentas from '../../components/EditarVentas'

const VentasPage = () => {

  return (
    <>
      <Navbar />
      <Header textoBoton={"Consultar ventas"} texto={"ventas"} link={"/ventas/consultar"} />
      <EditarVentas />
    </>
  )
}

export default VentasPage