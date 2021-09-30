import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login_Bootstrap";
import Ventas from "./pages/VentasPage";
import Usuarios from "./pages/UsuariosPage";
import Productos from "./pages/ProductosPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/ventas">
            <Ventas />
          </Route>
          <Route exact path="/productos">
            <Productos />
          </Route>
          <Route exact path="/usuarios">
            <Usuarios />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
