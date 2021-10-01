import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import { Login } from "./components/Login_Bootstrap";
import Ventas from "./pages/VentasPage";
import Usuarios from "./pages/UsuariosPage";
import Productos from "./pages/ProductosPage";
=======
import { Login } from "./components/Login";
>>>>>>> 8ccc6872254e7f858ec750b2564c4b146f787f3a

import Ventas from "./pages/ventas/VentasPage";
import VentasReg from "./pages/ventas/VentasRegistrarPage"
import VentasCons from "./pages/ventas/VentasConsultarPage"
import VentasEdit from "./pages/ventas/VentasEditarPage"

import Usuarios from "./pages/UsuariosPage";
import Productos from "./pages/ProductosPage";

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
