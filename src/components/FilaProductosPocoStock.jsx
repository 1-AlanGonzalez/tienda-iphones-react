import { useRef, useState, useEffect } from "react";
import { productos } from "../data/productos";
import { Link } from "react-router-dom";

function FilaProductosPocoStock({ titulo, subtitulo }) {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft]   = useState(false);
  const [canRight, setCanRight] = useState(true);

  const items = productos.filter(p => p.stock <= 5 && p.stock > 0);

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

  if (items.length === 0) return null;

  return (
    <section className="fila-section fila-poco-stock">

      <div className="fila-header">
        <div>
          <h2 className="fila-titulo">{titulo}</h2>
          {subtitulo && <p className="fila-subtitulo">{subtitulo}</p>}
        </div>
        <div className="fila-arrows">
          <button
            className="fila-arrow fila-arrow--urgente"
            onClick={() => scroll(-1)}
            disabled={!canLeft}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            className="fila-arrow fila-arrow--urgente"
            onClick={() => scroll(1)}
            disabled={!canRight}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>

      <div className="fila-scroll" ref={scrollRef}>
        {items.map((p) => (
          <Link key={p.id} to={`/producto/${p.id}`} className="fila-card fila-card-urgente">
            <span className="fila-stock-badge">
              🔥 Solo {p.stock} {p.stock === 1 ? "unidad" : "unidades"}
            </span>

            <div className="fila-img">
              <img src={p.imagen} alt={p.nombre} loading="lazy" />
            </div>

            <div className="fila-info">
              <p className="fila-categoria">{p.categoria} · {p.color}</p>
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

export default FilaProductosPocoStock;