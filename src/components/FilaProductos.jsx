import { useRef, useState, useEffect } from "react";
import { productos } from "../data/productos";
import { Link } from "react-router-dom";

function FilaProductos({ titulo, subtitulo, categoria }) {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft]   = useState(false);
  const [canRight, setCanRight] = useState(true);

  const items = productos
    .filter(p => p.categoria === categoria)
    .reduce((acc, p) => {
      if (!acc.find(x => x.nombre === p.nombre)) acc.push(p);
      return acc;
    }, []);

  const checkArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkArrows();
    el.addEventListener("scroll", checkArrows, { passive: true });
    window.addEventListener("resize", checkArrows);
    return () => {
      el.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 440, behavior: "smooth" });
  };

  return (
    <section className="fila-section">

      <div className="fila-header">
        <div>
          <h2 className="fila-titulo">{titulo}</h2>
          {subtitulo && <p className="fila-subtitulo">{subtitulo}</p>}
        </div>
        <div className="fila-header-right">
          <div className="fila-arrows">
            <button
              className="fila-arrow"
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className="fila-arrow"
              onClick={() => scroll(1)}
              disabled={!canRight}
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
          <Link to={`/productos?cat=${categoria.toLowerCase()}`} className="fila-ver-todos">
            Ver todos →
          </Link>
        </div>
      </div>

      <div className="fila-scroll" ref={scrollRef}>
        {items.map((p, i) => (
          <Link key={p.id} to={`/productos/${p.id}`} className="fila-card">
            {p.tag && <span className="fila-tag">{p.tag}</span>}
            {i === 0 && <span className="fila-mas-vendido">⭐ Más vendido</span>}

            <div className="fila-img">
              <img src={p.imagen} alt={p.nombre} loading="lazy" />
            </div>

            <div className="fila-info">
              <p className="fila-categoria">{p.categoria}</p>
              <p className="fila-nombre">{p.nombre}</p>
              <p className="fila-precio">USD ${p.precio.toLocaleString("es-AR")}</p>
              <p className="fila-cuotas">
                12x ${Math.round(p.precio / 12).toLocaleString("es-AR")} sin interés
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default FilaProductos;