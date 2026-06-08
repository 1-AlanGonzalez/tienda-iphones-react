import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { BsApple, BsBag, BsSearch, BsSun, BsMoon } from "react-icons/bs";
import MenuDesplegable from "./MenuDesplegable";

import { useCart } from "../context/CartContext";
import { useTema } from "../context/TemaContext";

function NavBar({ cantidadCarrito = 0 }) {
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
          <NavLink to="/nosotros" end className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>Nosotros</NavLink>
          <NavLink to="/contacto" end className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>Contacto</NavLink>
          <button className="icon-btn" onClick={() => setOscuro(!oscuro)} aria-label="Cambiar tema">
            {oscuro ? <BsSun /> : <BsMoon />}
          </button>
          <Link to="/carrito" className="icon-btn cart-btn" aria-label="Carrito">
            <BsBag />
            {cantidadCarrito > 0 && <span className="cart-badge">{cantidadCarrito}</span>}
          </Link>
        </div>
      </div>

      <nav className="navbar-categorias">
        <NavLink
          to="/productos?cat=ofertas"
          className={`cat-link hot ${catActiva === "ofertas" ? "active" : ""}`}
        >
          Ofertas
        </NavLink>

        <div className="cat-sep" />

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

        <div className="cat-sep" />
      </nav>
    </header>
  );
}

export default NavBar;