import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { BsApple, BsBag, BsSearch, BsSun, BsMoon } from "react-icons/bs";
<<<<<<< HEAD
=======

>>>>>>> 7de9be187a73c54980e369430613d6b5a3064eea
import MenuDesplegable from "./MenuDesplegable";

import { useCart } from "../context/CartContext";
import { useTema } from "../context/TemaContext";

<<<<<<< HEAD
function NavBar({ cantidadCarrito = 0 }) {
=======
function NavBar() {
>>>>>>> 7de9be187a73c54980e369430613d6b5a3064eea
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [hoverMenu, setHoverMenu] = useState(null);

  const { cantidadTotal } = useCart();
  const { oscuro, setOscuro } = useTema();

  // Se recalcula cada vez que cambia la URL
  const catActiva = new URLSearchParams(location.search).get("cat");

  const handleBusqueda = (e) => {
    if (e.key === "Enter" && busqueda.trim()) {
      navigate(`/productos?busqueda=${busqueda}`);
    }
  };

  return (
    <header className="navbar-contenedor">
<<<<<<< HEAD
=======
      {/* FILA 1 */}
>>>>>>> 7de9be187a73c54980e369430613d6b5a3064eea
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
<<<<<<< HEAD
          <NavLink to="/nosotros" end className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>Nosotros</NavLink>
          <NavLink to="/contacto" end className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>Contacto</NavLink>
          <button className="icon-btn" onClick={() => setOscuro(!oscuro)} aria-label="Cambiar tema">
            {oscuro ? <BsSun /> : <BsMoon />}
          </button>
          <Link to="/carrito" className="icon-btn cart-btn" aria-label="Carrito">
            <BsBag />
            {cantidadCarrito > 0 && <span className="cart-badge">{cantidadCarrito}</span>}
=======
          <NavLink to="/nosotros" className="navbar-link">
            Nosotros
          </NavLink>

          <NavLink to="/contacto" className="navbar-link">
            Contacto
          </NavLink>

          <button
            className="icon-btn"
            onClick={() => setOscuro(!oscuro)}
            aria-label="Cambiar tema"
          >
            {oscuro ? <BsSun /> : <BsMoon />}
          </button>

          <Link
            to="/carrito"
            className="icon-btn cart-btn"
            aria-label="Carrito"
          >
            <BsBag />

            {cantidadTotal > 0 && (
              <span className="cart-badge">
                {cantidadTotal}
              </span>
            )}
>>>>>>> 7de9be187a73c54980e369430613d6b5a3064eea
          </Link>
        </div>
      </div>

<<<<<<< HEAD
      <nav className="navbar-categorias">
        <NavLink
          to="/productos?cat=ofertas"
          className={`cat-link hot ${catActiva === "ofertas" ? "active" : ""}`}
=======
      {/* FILA 2 */}
      <nav className="navbar-categorias">
        <NavLink
          to="/productos?cat=ofertas"
          className={({ isActive }) =>
            `cat-link hot ${isActive ? "active" : ""}`
          }
>>>>>>> 7de9be187a73c54980e369430613d6b5a3064eea
        >
          Ofertas
        </NavLink>

        <div className="cat-sep" />

<<<<<<< HEAD
        {[
          { key: "iphone",     to: "iphone",     label: "Móviles",     cat: "iPhone"     },
          { key: "airpods",    to: "audio",       label: "Audio",       cat: "AirPods"    },
          { key: "mac",        to: "computacion", label: "Computación", cat: "Mac"        },
          { key: "accesorios", to: "accesorios",  label: "Accesorios",  cat: "Accesorios" },
          { key: "otros",      to: "otros",       label: "Otros",       cat: "Otros"      },
        ].map(({ key, to, label, cat }) => (
          <div
            key={key}
            className="cat-item"
            onMouseEnter={() => setHoverMenu(key)}
            onMouseLeave={() => setHoverMenu(null)}
          >
            <Link
              to={`/productos?cat=${to}`}
              className={`cat-link ${catActiva === to ? "active" : ""}`}
            >
              {label}
            </Link>
            {hoverMenu === key && <MenuDesplegable categoria={cat} />}
          </div>
        ))}
=======
        <div
          className="cat-item"
          onMouseEnter={() => setHoverMenu("iphone")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <NavLink to="/productos?cat=iphone" className="cat-link">
            Móviles
          </NavLink>

          {hoverMenu === "iphone" && (
            <MenuDesplegable categoria="iPhone" />
          )}
        </div>

        <div
          className="cat-item"
          onMouseEnter={() => setHoverMenu("airpods")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <NavLink to="/productos?cat=audio" className="cat-link">
            Audio
          </NavLink>

          {hoverMenu === "airpods" && (
            <MenuDesplegable categoria="AirPods" />
          )}
        </div>

        <div
          className="cat-item"
          onMouseEnter={() => setHoverMenu("mac")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <NavLink to="/productos?cat=computacion" className="cat-link">
            Computación
          </NavLink>

          {hoverMenu === "mac" && (
            <MenuDesplegable categoria="Mac" />
          )}
        </div>

        <div
          className="cat-item"
          onMouseEnter={() => setHoverMenu("accesorios")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <NavLink to="/productos?cat=accesorios" className="cat-link">
            Accesorios
          </NavLink>

          {hoverMenu === "accesorios" && (
            <MenuDesplegable categoria="Accesorios" />
          )}
        </div>

        <div
          className="cat-item"
          onMouseEnter={() => setHoverMenu("otros")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <NavLink to="/productos?cat=otros" className="cat-link">
            Otros
          </NavLink>

          {hoverMenu === "otros" && (
            <MenuDesplegable categoria="Otros" />
          )}
        </div>
>>>>>>> 7de9be187a73c54980e369430613d6b5a3064eea

        <div className="cat-sep" />
      </nav>
    </header>
  );
}

export default NavBar;