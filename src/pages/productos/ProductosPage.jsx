import NavBar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarProducto from "../../components/productos/ConsultarProducto";
import ListadoProductos from "../../components/productos/TablaProductos";
import { ConsultarProductoContext } from "../../context/consultarProductoContext";
import { useState } from "react";
import { useRolContext } from "../context/rolContext";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../../helper/fetch";

const ProductosPage = () => {
  const { setRolGlobal } = useRolContext();
  const { user } = useAuth0();

  useEffect(async () => {
    await axiosPetition(`usuarios/${user.email}`);
    setRolGlobal(respuesta.rol);
  }, []);

  const [consultaProducto, setConsultaProducto] = useState("");

  return (
    <>
      <ConsultarProductoContext.Provider
        value={{ consultaProducto, setConsultaProducto }}>
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
