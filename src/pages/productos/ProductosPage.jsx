import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import { ConsultarProductos } from '../../components/ConsultarProducto'

const ProductosPage = () => {
  return (
    <>
      <Navbar />
      <Header textoBoton={"Nuevo producto"} texto={"productos"} link={"/productos/editar"} />
      <ConsultarProductos />
    </>
  )
}

export default ProductosPage
