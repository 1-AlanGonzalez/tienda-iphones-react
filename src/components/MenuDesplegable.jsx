import { useState } from "react";
import { Link } from "react-router-dom";
import { productos } from "../data/productos.jsx";

const CONFIG = {
  iPhone: {
    titulo: "Móviles",
    lineas: ["Standard", "Pro", "Pro Max"],
    campoFiltro: "linea",
    labelLinea: (l) => `iPhone ${l === "Standard" ? "estándar" : l}`,  },
  Audio: {
    titulo: "Audio",
    lineas: ["AirPods Pro", "AirPods Max", "AirPods 2"],
    campoFiltro: "nombre",
    labelLinea: (l) => l
  },
  Computación: {
    titulo: "Computación",
    lineas: ["MacBook Air", "MacBook Pro", "Mac Mini", "iMac"],
    campoFiltro: "nombre",
    labelLinea: (l) => l
  },
  Accesorios: {
    titulo: "Accesorios",
    lineas: ["MagSafe", "Cases", "Cables"],
    campoFiltro: "tipo",
    labelLinea: (l) => l
  }
};

function MenuDesplegable({ categoria }) {
  const config = CONFIG[categoria];
  const [lineaActiva, setLineaActiva] = useState(0);

  if (!config) return null;

  const lineas = config.lineas;
  const lineaSeleccionada = lineas[lineaActiva];

  // Filtrá productos de esa categoría y línea, máximo 3 únicos por nombre
  const productosLinea = productos.filter((p) => {
    const valor = p[config.campoFiltro];

    return (
      p.categoria === categoria &&
      valor?.includes(lineaSeleccionada)
    );
  }).slice(0, 3);

  // Si no hay por línea exacta, mostrá los primeros 3 de la categoría
  const productosAMostrar =
    productosLinea.length > 0
      ? productosLinea
      : productos
          .filter((p) => p.categoria === categoria)
          .reduce((acc, p) => {
            if (!acc.find((x) => x.nombre === p.nombre)) acc.push(p);
            return acc;
          }, [])
          .slice(0, 3);

  return (
    <div className="menu-desplegable">
      <div className="menu-desplegable-content">

        {/* SIDEBAR */}
        <div className="menu-desplegable-sidebar">
          <h3>{config.titulo}</h3>
          {lineas.map((linea, i) => (
            <div
              key={linea}
              className={`menu-sidebar-item ${i === lineaActiva ? "activo" : ""}`}
              onMouseEnter={() => setLineaActiva(i)}
            >
              <span>{config.labelLinea(linea)}</span>
              <span className="menu-sidebar-arrow">›</span>
            </div>
          ))}
          <Link
            to={`/productos?cat=${categoria.toLowerCase()}`}
            className="menu-ver-todos"
          >
            Ver todos →
          </Link>
        </div>

        {/* CARDS */}
        <div className="menu-desplegable-products">
          {productosAMostrar.length > 0 ? (
            productosAMostrar.map((p) => (
              <Link
                to={`/producto/${p.id}`}
                key={p.id}
                className="menu-desplegable-card"
              >
                <img src={p.imagen} alt={p.nombre} />
                <span className="menu-card-nombre">{p.nombre}</span>
                <span className="menu-card-precio">
                  USD ${p.precio.toLocaleString("es-AR")}
                </span>
              </Link>
            ))
          ) : (
            <p className="menu-proximamente">Próximamente</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default MenuDesplegable;