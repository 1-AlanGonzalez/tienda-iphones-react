import React from 'react';

function NavBar() {
  return (
    <div className="navBar">
        {/* logo con imagen de manzana de bootstrap */}
        <a href="/" className="logo">
            <i className="bi bi-apple"></i>
        </a>
        
        <input type="text" placeholder="Buscar..." className="inputBusqueda" />
        <nav >
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/contacto">Nosotros</a></li>
                <li>
                    <a href="/carrito">
                        <i className="bi bi-cart"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default NavBar;