import { productos } from "../data/productos";
import { Link } from "react-router-dom";

function FilaProductosPocoStock({ titulo, subtitulo }) {

  const items = productos.filter(p => p.stock <= 5);

  if (items.length === 0) return null;

  return (
    <section className="fila-section fila-poco-stock">

      <div className="fila-header">
        <div>
          <h2 className="fila-titulo">{titulo}</h2>
          {subtitulo && <p className="fila-subtitulo">{subtitulo}</p>}
        </div>
      </div>

      <div className="fila-scroll">
        {items.map((p) => (
          <Link key={p.id} to={`/productos/${p.id}`} className="fila-card">

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