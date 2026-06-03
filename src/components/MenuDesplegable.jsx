import { productos } from "../data/productos";

function MenuDesplegable({ categoria }) {
  const productosFiltrados = productos.filter(
    (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
  );

  return (
    <div className="menu-desplegable">
      <div className="menu-desplegable-content">

        <div className="menu-desplegable-sidebar">
          <h3>{categoria}</h3>

          {productosFiltrados.map((producto) => (
            <a key={producto.id} href={`/producto/${producto.id}`}>
              {producto.nombre}
            </a>
          ))}
        </div>

        <div className="menu-desplegable-products">
          {productosFiltrados.map((producto) => (
            <div className="menu-desplegable-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <span>{producto.nombre}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default MenuDesplegable;