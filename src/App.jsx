import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Contacto from './pages/Contacto';
import Carrito from "./pages/Carrito";
import { CartProvider } from "./context/CartContext";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;