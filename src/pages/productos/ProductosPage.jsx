<<<<<<< HEAD
import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import { ConsultarProductos } from '../../components/ConsultarProducto'
=======
import React from "react";
import NavBar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarProducto from "../../components/ConsultarProducto";
import ListadoProductos from "../../components/Listadoproductos";
>>>>>>> alvaro

const ProductosPage = () => {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <Header textoBoton={"Nuevo producto"} texto={"productos"} link={"/productos/editar"} />
      <ConsultarProductos />
    </>
  )
}

export default ProductosPage
=======
      <NavBar />
      <Header
        textoBoton={"Nuevo producto"}
        texto={"productos"}
        link={"/productos/consultar"}
      />
      <ConsultarProducto />
      <ListadoProductos />
    </>
  );
};

export default ProductosPage;
>>>>>>> alvaro
