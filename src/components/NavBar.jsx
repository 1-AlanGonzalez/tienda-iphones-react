import React from 'react';

// Añadido hoy 28/05/2026

// Importo Link y Navlink visto en clase para usarlo en el NavBar
import { Link, NavLink } from "react-router-dom";
// Importo useState para manejar el estado del menú desplegable en dispositivos móviles
import { useState } from "react";

// Importo los iconos de Bootstrap para el logo, la búsqueda y el carrito de compras
// Para que funcione instalé la libreria react-icons con el comando npm install react-icons
import { BsApple, BsSearch, BsBag } from "react-icons/bs";

// la función NavBar recibe una prop cantidadCarrito que se muestra como un badge en el icono del carrito si es mayor a 0
function NavBar({ cantidadCarrito = 0 }) {
  return (
    <header className="navbar-contenedor">
      <nav className="navbar">
        <Link to="/" className="navbar-logo" aria-label="Inicio">
          <BsApple />
          <h5 className="logo-text">Apple Store</h5>
        </Link>

        <div className="navbar-busqueda">
          <BsSearch className="busqueda-icon" />
          <input type="text" placeholder="Buscar productos..." />
        </div>

        <ul className="navbar-links">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/productos">Productos</NavLink></li>
          <li><NavLink to="/nosotros">Nosotros</NavLink></li>
        </ul>

        <div className="navbar-carrito">
          <Link to="/carrito" className="icon-btn cart-btn" aria-label="Carrito">
            <BsBag />
            {cantidadCarrito > 0 && (
              <span className="cart-badge">{cantidadCarrito}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;