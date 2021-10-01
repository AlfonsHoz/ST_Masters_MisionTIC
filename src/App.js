import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login_Bootstrap";

import Ventas from "./pages/ventas/VentasPage";
import VentasReg from "./pages/ventas/VentasRegistrarPage";
import VentasCons from "./pages/ventas/VentasConsultarPage";
import VentasEdit from "./pages/ventas/VentasEditarPage";

import Usuarios from "./pages/usuarios/UsuariosPage";
import Productos from "./pages/productos/ProductosPage";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/ventas">
          <Ventas />
        </Route>
        <Route exact path="/ventas/registrar">
          <VentasReg />
        </Route>
        <Route exact path="/ventas/consultar">
          <VentasCons />
        </Route>
        <Route exact path="/ventas/editar">
          <VentasEdit />
        </Route>

        <Route exact path="/productos">
          <Productos />
        </Route>
        <Route exact path="/productos/registrar">
          <Productos />
        </Route>
        <Route exact path="/productos/consultar">
          <Productos />
        </Route>
        <Route exact path="/productos/editar">
          <Productos />
        </Route>

        <Route exact path="/usuarios">
          <Usuarios />
        </Route>
      </Router>
    </>
  );
}

export default App;
