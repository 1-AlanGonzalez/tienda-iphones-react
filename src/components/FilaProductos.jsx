import { productos } from "../data/productos";
import { Link } from "react-router-dom";

function FilaProductos({ titulo, subtitulo, categoria }) {

  // Deduplica por nombre, toma el primero de cada modelo
  const items = productos
    .filter(p => p.categoria === categoria)
    .reduce((acc, p) => {
      if (!acc.find(x => x.nombre === p.nombre)) acc.push(p);
      return acc;
    }, []);

  return (
    <section className="fila-section">

      <div className="fila-header">
        <div>
          <h2 className="fila-titulo">{titulo}</h2>
          {subtitulo && <p className="fila-subtitulo">{subtitulo}</p>}
        </div>
        <Link to={`/productos?cat=${categoria.toLowerCase()}`} className="fila-ver-todos">
          Ver todos →
        </Link>
      </div>

      <div className="fila-scroll">
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