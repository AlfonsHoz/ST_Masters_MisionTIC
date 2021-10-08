import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
<<<<<<< HEAD
import { EditarProductos } from "../../components/EditarProductos";
import ListadoProductos from "../../components/Listadoproductos";
=======
import EditarProductos from "../../components/EditarProductos";
>>>>>>> development

const ProductosEditarPage = () => {
  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Consultar productos"}
        texto={"productos"}
        link={"/productos/consultar"}
      />
      <EditarProductos />
<<<<<<< HEAD
      <ListadoProductos />
=======
>>>>>>> development
    </>
  );
};

<<<<<<< HEAD
export default ProductosPage;
=======
export default ProductosEditarPage;
>>>>>>> development
