import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import { RegistrarVenta } from '../../components/RegistrarVenta'

const VentasPage = () => {

  return (
    <>
      <Navbar />
      <Header textoBoton={"Consultar ventas"} texto={"ventas"} link={"/ventas/consultar"} />
      <RegistrarVenta />
    </>
  )
}

export default VentasPage