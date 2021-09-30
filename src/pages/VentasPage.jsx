import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'

const VentasPage = () => {
  return (
    <>
      <Navbar />
      <Header textoBoton={"Nueva venta"} texto={ventas} />
    </>
  )
}

export default VentasPage
