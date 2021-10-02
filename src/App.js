import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import EditarVentas from "./components/EditarVentas"
import ListadoProductos from "./components/Listadoproductos";
import { Login } from "./pages/Login";

import Ventas from "./pages/ventas/VentasPage";
import VentasReg from "./pages/ventas/VentasRegistrarPage"
import VentasCons from "./pages/ventas/VentasConsultarPage"
import VentasEdit from "./pages/ventas/VentasEditarPage"

import Usuarios from "./pages/usuarios/UsuariosPage";
import { Productos } from "./pages/productos/ProductosPage";

function App() {
  return <>
    <Router>
      <Route
        exact path="/">
        <Login />
      </Route>

      <Route
        exact path="/ventas">
        <Ventas />
      </Route>
      <Route
        exact path="/ventas/registrar">
        <VentasReg />
      </Route>
      <Route
        exact path="/ventas/consultar">
        <VentasCons />
      </Route>
      <Route
        exact path="/ventas/editar">
        <VentasEdit />
      </Route>

      <Route
        exact path="/productos">
        <Productos />
      </Route>


      <Route
        exact path="/usuarios">
        <Usuarios />
      </Route>
    </Router>
  </>;
}

export default App;
