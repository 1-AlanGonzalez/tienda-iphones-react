import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import "./styles/navBar.css";
import "./styles/productos.css";
import "./styles/carrito.css";

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { TemaProvider } from "./context/TemaContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </StrictMode>
);