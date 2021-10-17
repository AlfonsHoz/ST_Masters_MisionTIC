
import NavBar from "../../components/Navbar";
import Header from "../../components/Header";
<<<<<<< HEAD
import ConsultarProducto from "../../components/ConsultarProducto";
import ListadoProductos from "../../components/Listadoproductos";
=======
import ConsultarProducto from "../../components/productos/ConsultarProducto";
import ListadoProductos from "../../components/productos/TablaProductos";
>>>>>>> 00582c7c4575cd10eba15d5a4fb7c9f249d39d05
import { ConsultarProductoContext } from '../../context/consultarProductoContext';
import { useState } from "react";

const ProductosPage = () => {

  const [consultaProducto, setConsultaProducto] = useState('');

  return (
    <>
      <ConsultarProductoContext.Provider value={{ consultaProducto, setConsultaProducto }}>
        <NavBar />
        <Header
          textoBoton={"Nuevo producto"}
          texto={"productos"}
          link={"/productos/registrar"}
        />
        <ConsultarProducto />
        <ListadoProductos />
      </ConsultarProductoContext.Provider>
    </>
  );
};

export default ProductosPage;