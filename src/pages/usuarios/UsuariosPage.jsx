import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

const UsuariosPage = () => {
  return (
    <>
      <Navbar />
      <Header botonText={"Nuevo usuario"} text={"usuarios"} lin={"/ususarios/registrar"} />

    </>
  )
}

export default UsuariosPage
