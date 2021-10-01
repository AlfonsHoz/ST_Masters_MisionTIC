import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { ConsultarUsuario } from '../../components/ConsultarUsuario'
import ListadoUsuarios from '../../components/ListadoUsuarios'

const UsuariosPage = () => {
  return (
    <>
      <Navbar />
      <Header textoBoton={"Nuevo usuario"} texto={"usuarios"} link={"/ususarios/registrar"} />
      <ConsultarUsuario />
      <ListadoUsuarios />
    </>
  )
}

export default UsuariosPage
