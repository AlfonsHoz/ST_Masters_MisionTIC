import { React, useState, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";

import { Login } from "./components/Login";
import Loading from "./components/Loading";

import { VentasContext } from "./context/ventasContext";
import { UsuariosContext } from "./context/usuariosContext";
import { ProductosContext } from "./context/productosContext";
import { UsuariosEditarContext } from "./context/editarusuarioContext";
import { RolContext } from "./context/rolContext";

import Ventas from "./pages/ventas/VentasPage";
import VentasReg from "./pages/ventas/VentasRegistrarPage";
import VentasEdit from "./pages/ventas/VentasEditarPage";

import Usuarios from "./pages/usuarios/UsuariosPage";
import UsuariosRegistrarPage from "./pages/usuarios/UsuariosRegistrarPage";
import UsuariosEditarPage from "./pages/usuarios/UsuariosEditarPage";

import Productos from "./pages/productos/ProductosPage";
import ProductoRegistrar from "./pages/productos/ProductosRegistrarPage";
import ProductosEditarPage from "./pages/productos/ProductosEditarPage";
import Unauthorized from "./components/Unauthorized";

function App() {
  const [usuariosConsultar, setUsuariosConsultar] = useState(false);
  const [productoEditar, setProductoEditar] = useState({});
  const [usuariosEditar, setUsuariosEditar] = useState("");
  const [ventasEditar, setVentasEditar] = useState("");
  const [rolGlobal, setRolGlobal] = useState("");

  return (
    <Auth0Provider
      domain='st-masters.us.auth0.com'
      clientId='hnI7qZHfG2S7q03F0BTB1wbIlKSVGsym'
      redirectUri={"https://stmasters.herokuapp.com/ventas"}
      audience='api-autenticacion-st-masters'>
      <Router>
        <Route exact path='/'>
          <Login />
        </Route>
        <RolContext.Provider value={{ rolGlobal, setRolGlobal }}>
          <PrivateRoute>
            <VentasContext.Provider value={{ ventasEditar, setVentasEditar }}>
              <Route exact path='/ventas'>
                {rolGlobal === "pendiente" ? <Unauthorized /> : <Ventas />}
              </Route>
              <Route exact path='/ventas/registrar'>
                {rolGlobal === "pendiente" ? <Unauthorized /> : <VentasReg />}
              </Route>
              <Route exact path='/ventas/editar'>
                {rolGlobal === "pendiente" ? <Unauthorized /> : <VentasEdit />}
              </Route>
            </VentasContext.Provider>
            <ProductosContext.Provider
              value={{ productoEditar, setProductoEditar }}>
              <Route exact path='/productos'>
                {rolGlobal === "pendiente" || rolGlobal === "vendedor" ? (
                  <Unauthorized />
                ) : (
                  <Productos />
                )}
              </Route>
              <Route exact path='/productos/registrar'>
                {rolGlobal === "pendiente" || rolGlobal === "vendedor" ? (
                  <Unauthorized />
                ) : (
                  <ProductoRegistrar />
                )}
              </Route>
              <Route exact path='/productos/editar'>
                {rolGlobal === "pendiente" || rolGlobal === "vendedor" ? (
                  <Unauthorized />
                ) : (
                  <ProductosEditarPage />
                )}
              </Route>
            </ProductosContext.Provider>

            <UsuariosContext.Provider
              value={{ usuariosConsultar, setUsuariosConsultar }}>
              <UsuariosEditarContext.Provider
                value={{ usuariosEditar, setUsuariosEditar }}>
                <Route exact path='/usuarios'>
                  {rolGlobal === "pendiente" || rolGlobal === "vendedor" ? (
                    <Unauthorized />
                  ) : (
                    <Usuarios />
                  )}
                </Route>
                <Route exact path='/usuarios/registrar'>
                  {rolGlobal === "pendiente" || rolGlobal === "vendedor" ? (
                    <Unauthorized />
                  ) : (
                    <UsuariosRegistrarPage />
                  )}
                </Route>
                <Route exact path='/usuarios/editar'>
                  {rolGlobal === "pendiente" || rolGlobal === "vendedor" ? (
                    <Unauthorized />
                  ) : (
                    <UsuariosEditarPage />
                  )}
                </Route>
              </UsuariosEditarContext.Provider>
            </UsuariosContext.Provider>
          </PrivateRoute>
        </RolContext.Provider>
      </Router>
    </Auth0Provider>
  );
}

export default App;
