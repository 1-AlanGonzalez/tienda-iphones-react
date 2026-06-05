import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Contacto from './pages/Contacto';
import "./App.css";

function App() {
  return (
   <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
   </BrowserRouter>

  );
}

export default App;