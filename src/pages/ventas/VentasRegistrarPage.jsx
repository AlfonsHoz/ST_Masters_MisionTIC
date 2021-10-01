import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Consultarventas from '../../components/Consultarventas'
import Listadoventas from '../../components/Listadoventas'

const VentasPage = () => {

  return (
    <>
      <Navbar />
      <Header textoBoton={"Consultar ventas"} texto={"ventas"} link={"/ventas/consultar"} />

      <Listadoventas />
    </>
  )
}

export default VentasPage