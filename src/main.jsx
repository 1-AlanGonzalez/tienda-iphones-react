<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/navBar.css'
import './styles/productos.css'
import './styles/carrusel.css'
import './styles/filaProductos.css'
import './styles/temaOscuro.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// icons bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import "./styles/navBar.css";
import "./styles/productos.css";
import "./styles/carrito.css";

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
>>>>>>> 7de9be187a73c54980e369430613d6b5a3064eea

import { TemaProvider } from "./context/TemaContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </StrictMode>
);