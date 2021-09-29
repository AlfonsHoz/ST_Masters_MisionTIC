import "./App.css";
import { Login } from './components/Login';
import Navbar from './components/Navbar';
import { Header } from './components/Header';
import { RegistrarVenta } from './components/RegistrarVenta';
import { ListadoUsuarios } from './components/ListadoUsuarios';

function App() {
  return (
    <>
      <Navbar />
      <RegistrarVenta />
    </>
  );
}

export default App;
