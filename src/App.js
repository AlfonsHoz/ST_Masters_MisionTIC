import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { EditarUsuarios } from "./components/EditarUsuarios.jsx";
import { Login } from "./components/Login_Bootstrap";
import Navbar from "./components/Navbar";
import { ConsultarProducto } from "./components/ConsultarProducto";
import { ListadoUsuarios } from "./components/ListadoUsuarios";
import EditarProductos from "./components/EditarProductos";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
