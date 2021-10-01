import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Consultarventas from '../../components/Consultarventas'

const VentasPage = () => {

  return (
    <>
      <Navbar />
      <Header textoBoton={"Nueva venta"} texto={"ventas"} link={"/ventas/registrar"} />
      <Consultarventas />
    </>
  )
}

export default VentasPage