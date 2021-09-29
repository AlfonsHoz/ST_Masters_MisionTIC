import "./App.css";
import { Login } from './components/Login';
import Navbar from './components/Navbar';
import { ConsultarProducto } from './components/ConsultarProducto';
import { ListadoUsuarios } from './components/ListadoUsuarios';

function App() {
  return (
    <>
      <Navbar />
      <ConsultarProducto />
      <ListadoUsuarios />
    </>
  );
}

export default App;
