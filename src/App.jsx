import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import "./App.css";

function App() {
  return (
   <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/productos" element={<Productos />} />
        </Routes>
   </BrowserRouter>

  );
}

export default App;