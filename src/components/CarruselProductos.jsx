import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productos } from "../data/productos.jsx";
import "../styles/Inicio.css";

function CarruselProductos() {
  const [actual, setActual] = useState(0);
  const [animando, setAnimando] = useState(false);
  const total = productos.length;

  const cambiar = (dir) => {
    if (animando) return;
    setAnimando(true);
    setTimeout(() => {
      setActual((prev) => (prev + dir + total) % total);
      setAnimando(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => cambiar(1), 4000);
    return () => clearInterval(timer);
  }, [actual]);

  const p = productos[actual];

  return (
    <section className="carrusel-section">
      <div className="carrusel-header">
        <p className="carrusel-eyebrow">PRODUCTOS EN OFERTA</p>
        <h2 className="carrusel-titulo">Descubre nuestras mejores ofertas</h2>
      </div>

      <div className="carrusel-wrapper">
        {/* Flecha izquierda */}
        <button className="carrusel-arrow left" onClick={() => cambiar(-1)} aria-label="Anterior">
          &#8592;
        </button>

        {/* Card del producto */}
        <div className={`carrusel-card ${animando ? "fade-out" : "fade-in"}`}>
          {p.tag && <span className="carrusel-tag">{p.tag}</span>}

          <div className="carrusel-img">
            <img src={p.imagen} alt={p.nombre} loading="lazy" />
          </div>

          <div className="carrusel-info">
            <p className="carrusel-categoria">{p.categoria}</p>
            <p className="carrusel-nombre">{p.nombre}</p>
            <p className="carrusel-desc">{p.descripcion}</p>
            <p className="carrusel-precio">
              ${p.precio.toLocaleString("es-AR")}
            </p>
            <p className="carrusel-cuotas">
              12 cuotas sin interés de ${Math.round(p.precio / 12).toLocaleString("es-AR")}
            </p>
            <div className="carrusel-btns">
              <Link to={`/productos/${p.id}`} className="carrusel-btn-detalle">
                Ver detalle
              </Link>
              <Link to="/productos" className="carrusel-btn-catalogo">
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>

        {/* Flecha derecha */}
        <button className="carrusel-arrow right" onClick={() => cambiar(1)} aria-label="Siguiente">
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="carrusel-dots">
        {productos.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === actual ? "dot-activo" : ""}`}
            onClick={() => setActual(i)}
            aria-label={`Producto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CarruselProductos;