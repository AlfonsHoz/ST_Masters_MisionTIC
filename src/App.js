import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Login } from "./components/Login_Bootstrap";

import { VentasContext } from "./context/ventasContext";
import { UsuariosContext } from "./context/usuariosContext";
import { ProductosContext } from "./context/productosContext";

import Ventas from "./pages/ventas/VentasPage";
import VentasReg from "./pages/ventas/VentasRegistrarPage";
import VentasEdit from "./pages/ventas/VentasEditarPage";

import Usuarios from "./pages/usuarios/UsuariosPage";
import UsuariosRegistrarPage from "./pages/usuarios/UsuariosRegistrarPage";
import UsuariosEditarPage from "./pages/usuarios/UsuariosEditarPage";

import Productos from "./pages/productos/ProductosPage";
import RegistrarProducto from "./pages/productos/ProductosRegistrarPage";

function App() {

  const [ventasConsultar, setVentasConsultar] = useState(false);
  const [usuariosConsultar, setUsuariosConsultar] = useState(false);
  const [productosConsultar, setProductosConsultar] = useState(false);

  return (
    <>
      <Router>
        <Route exact path="/">
          <Login />
        </Route>

        <VentasContext.Provider value={{ ventasConsultar, setVentasConsultar }}>
          <Route exact path="/ventas">
            <Ventas />
          </Route>
          <Route exact path="/ventas/registrar">
            <VentasReg />
          </Route>
          <Route exact path="/ventas/editar">
            <VentasEdit />
          </Route>
        </VentasContext.Provider>

        <ProductosContext.Provider value={{ productosConsultar, setProductosConsultar }}>
          <Route exact path="/productos">
            <Productos />
          </Route>
          <Route exact path="/productos/registrar">
            <RegistrarProducto />
          </Route>
          <Route exact path="/productos/editar">
            <Productos />
          </Route>
        </ProductosContext.Provider>

        <UsuariosContext.Provider value={{ usuariosConsultar, setUsuariosConsultar }}>
          <Route exact path="/usuarios">
            <Usuarios />
          </Route>
          <Route exact path="/usuarios/registrar">
            <UsuariosRegistrarPage />
          </Route>
          <Route exact path="/usuarios/editar">
            <UsuariosEditarPage />
          </Route>
        </UsuariosContext.Provider>
      </Router>
    </>
  );
}

export default App;
