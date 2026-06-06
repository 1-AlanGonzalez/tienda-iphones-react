import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/navBar.css'
import './styles/productos.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// icons bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";

// Importo reactDom para renderizar la aplicación y el TemaProvider para envolver la app y proporcionar el contexto de tema a toda la aplicación.
import ReactDOM from "react-dom/client";
import { TemaProvider } from "./context/TemaContext";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </React.StrictMode>
)


