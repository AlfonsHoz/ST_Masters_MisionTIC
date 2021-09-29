import "./App.css";
import Listadoventas from "./components/Listadoventas";
import Navbar from "./components/Navbar.jsx";
import GestionarVentas from "./components/Gestionarventas.jsx";
import Consultarventas from "./components/Consultarventas";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GestionarVentas/>
      <Consultarventas/>
      <Listadoventas />
    </div>
  );
}

export default App;
