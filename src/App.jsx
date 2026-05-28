import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Inicio />
    </BrowserRouter>
  );
}

export default App;