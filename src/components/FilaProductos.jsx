import { productos } from "../data/productos";
import { Link } from "react-router-dom";

function FilaProductos({ titulo, categoria }) {
  const items = productos.filter(
    p => p.categoria === categoria
  );

  return (
    <section className="fila-productos">

      <h2>{titulo}</h2>

      <div className="fila-scroll">
        {items.map(producto => (
          <Link
            key={producto.id}
            to={`/productos/${producto.id}`}
            className="producto-mini"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
            />

            <h3>{producto.nombre}</h3>

            <p>
              ${producto.precio.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default FilaProductos;