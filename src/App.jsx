import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Contacto from './pages/Contacto';
import Nosotros from "./pages/Nosotros"; 
import "./App.css";

function App() {
  return (
   <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} /> 
        </Routes>
        <Footer />
   </BrowserRouter>

  );
}

export default App;