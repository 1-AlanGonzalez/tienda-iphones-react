import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsApple, BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import MenuDesplegable from "./MenuDesplegable";


function NavBar({ cantidadCarrito = 0 }) {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();
  const [hoverMenu, setHoverMenu] = useState(null);

  const handleBusqueda = (e) => {
    if (e.key === "Enter" && busqueda.trim()) {
      navigate(`/productos?busqueda=${busqueda}`);
    }
  };

  return (
    <header className="navbar-contenedor">

      {/* ── FILA 1: logo, buscador, nosotros, carrito ── */}
      <div className="navbar-top">
        <Link to="/" className="navbar-logo">
          <BsApple />
          <span className="logo-text">Apple Store</span>
        </Link>

        <div className="navbar-busqueda">
          <BsSearch className="busqueda-icon" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={handleBusqueda}
          />
        </div>

        <div className="navbar-right">
          <NavLink to="/nosotros" className="navbar-link">Nosotros</NavLink>
          <Link to="/carrito" className="icon-btn cart-btn" aria-label="Carrito">
            <BsBag />
            {cantidadCarrito > 0 && (
              <span className="cart-badge">{cantidadCarrito}</span>
            )}
          </Link>
        </div>
      </div>

      {/* ── FILA 2: categorías ── */}
      <nav className="navbar-categorias">
        <NavLink to="/productos?cat=ofertas"  className={({ isActive }) => `cat-link hot ${isActive ? "active" : ""}`}>
          🔥 Ofertas
        </NavLink>
        <div className="cat-sep" />
        <div
  className="cat-item"
  onMouseEnter={() => setHoverMenu("iphone")}
  onMouseLeave={() => setHoverMenu(null)}
>
  <NavLink
    to="/productos?cat=iphone"
    className="cat-link"
  >
    Móviles
  </NavLink>

  {hoverMenu === "iphone" && (
    <MenuDesplegable categoria="iPhone" />
  )}
</div>



        <NavLink to="/productos?cat=ipad"     className={({ isActive }) => `cat-link ${isActive ? "active" : ""}`}>Audio</NavLink>
        <NavLink to="/productos?cat=mac"      className={({ isActive }) => `cat-link ${isActive ? "active" : ""}`}>Computación</NavLink>
        <NavLink to="/productos?cat=airpods"  className={({ isActive }) => `cat-link ${isActive ? "active" : ""}`}>Accesorios</NavLink>
        <NavLink to="/productos?cat=watch"    className={({ isActive }) => `cat-link ${isActive ? "active" : ""}`}>Otros</NavLink>
        <div className="cat-sep" />
      </nav>

    </header>
  );
}

export default NavBar;