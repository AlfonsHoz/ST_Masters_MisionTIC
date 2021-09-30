import Navbar from "./components/Navbar";
import "./App.css";
import { Header } from "./components/Header";
import Listadoventas from "./components/Listadoventas";
import ListadoUsuarios from "./components/ListadoUsuarios";
import RegistroUsuarios from "./components/RegistroUsuarios";

function App() {
  return <>
    <Navbar />
    <Header
      textoBoton={"Nuevo usuario"}
      texto={"usuarios"}
    />
    <RegistroUsuarios />
    <ListadoUsuarios />
    <Header
      textoBoton={"Nueva venta"}
      texto={"ventas"}
    />
    <Listadoventas />
    <Header
      textoBoton={"Nuevo producto"}
      texto={"productos"}
    />

  </>;
}

export default App;
