import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";

import { Login } from "./components/Login";

import { VentasContext } from "./context/ventasContext";
import { UsuariosContext } from "./context/usuariosContext";
import { ProductosContext } from "./context/productosContext";
import { UsuariosEditarContext } from "./context/editarusuarioContext";

import Ventas from "./pages/ventas/VentasPage";
import VentasReg from "./pages/ventas/VentasRegistrarPage";
import VentasEdit from "./pages/ventas/VentasEditarPage";

import Usuarios from "./pages/usuarios/UsuariosPage";
import UsuariosRegistrarPage from "./pages/usuarios/UsuariosRegistrarPage";
import UsuariosEditarPage from "./pages/usuarios/UsuariosEditarPage";

import Productos from "./pages/productos/ProductosPage";
import ProductoRegistrar from "./pages/productos/ProductosRegistrarPage";
import ProductosEditarPage from "./pages/productos/ProductosEditarPage";

function App() {
  const [usuariosConsultar, setUsuariosConsultar] = useState(false);
  const [productoEditar, setProductoEditar] = useState({});
  const [usuariosEditar, setUsuariosEditar] = useState("");
  const [ventasEditar, setVentasEditar] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <Auth0Provider
      domain='st-masters.us.auth0.com'
      clientId='hnI7qZHfG2S7q03F0BTB1wbIlKSVGsym'
      redirectUri={"https://stmasters.herokuapp.com/usuarios"}
      audience='api-autenticacion-st-masters'>
      <Router>
        <Route exact path='/'>
          <Login />
        </Route>
        <PrivateRoute>
          <VentasContext.Provider value={{ ventasEditar, setVentasEditar }}>
            <Route exact path='/ventas'>
              <Ventas />
            </Route>
            <Route exact path='/ventas/registrar'>
              <VentasReg />
            </Route>
            <Route exact path='/ventas/editar'>
              <VentasEdit />
            </Route>
          </VentasContext.Provider>

          <ProductosContext.Provider
            value={{ productoEditar, setProductoEditar }}>
            <Route exact path='/productos'>
              <Productos />
            </Route>
            <Route exact path='/productos/registrar'>
              <ProductoRegistrar />
            </Route>
            <Route exact path='/productos/editar'>
              <ProductosEditarPage />
            </Route>
          </ProductosContext.Provider>

          <UsuariosContext.Provider
            value={{ usuariosConsultar, setUsuariosConsultar }}>
            <UsuariosEditarContext.Provider
              value={{ usuariosEditar, setUsuariosEditar }}>
              <Route exact path='/usuarios'>
                <Usuarios />
              </Route>
              <Route exact path='/usuarios/registrar'>
                <UsuariosRegistrarPage />
              </Route>
              <Route exact path='/usuarios/editar'>
                <UsuariosEditarPage />
              </Route>
            </UsuariosEditarContext.Provider>
          </UsuariosContext.Provider>
        </PrivateRoute>
      </Router>
    </Auth0Provider>
  );
}

export default App;
