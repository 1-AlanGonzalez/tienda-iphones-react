import { useState } from "react";
import { productos } from "../data/productos";
import { useCart } from "../context/CartContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const mapaCategoria = {
    iphone:       "iPhone",
    audio:        "Audio",
    "computación": "Computación",
    accesorios:   "Accesorios",
};

function Cards({ seleccionados, datos, cat, precioMin, precioMax, orden }) {
    const [visibles, setVisibles] = useState(8);
    const { agregarAlCarrito } = useCart();
    const navigate = useNavigate();

    // ✅ Lee el param ?busqueda= directamente desde la URL
    const [searchParams] = useSearchParams();
    const busqueda = searchParams.get("busqueda") || "";

    const categoriaActual = mapaCategoria[cat];

    // 1. Filtrar por categoría
    let base = categoriaActual
        ? productos.filter(p => p.categoria === categoriaActual)
        : cat === "ofertas"
        ? productos.filter(p => p.tag === "Oferta")
        : productos;

    // 2. ✅ Filtrar por texto de búsqueda
    if (busqueda.trim()) {
        const q = busqueda.toLowerCase();
        base = base.filter(p =>
            p.nombre.toLowerCase().includes(q) ||
            p.categoria?.toLowerCase().includes(q) ||
            p.color?.toLowerCase().includes(q) ||
            p.almacenamiento?.toLowerCase().includes(q)
        );
    }

    // 3. Filtrar por precio
    const porPrecio = base.filter(p => p.precio >= precioMin && p.precio <= precioMax);

    // 4. Filtrar por checkboxes
    const hayFiltros = Object.values(seleccionados).some(v => v === true);
    const productosFiltrados = hayFiltros
        ? porPrecio.filter(p =>
              datos.every(filtro => {
                  const opcionesSeleccionadas = filtro.opciones.filter(op => seleccionados[op]);
                  if (opcionesSeleccionadas.length === 0) return true;
                  return opcionesSeleccionadas.some(op =>
                      filtro.exacto
                          ? p[filtro.campo]?.toLowerCase() === op.toLowerCase()
                          : p[filtro.campo]?.toLowerCase().includes(op.toLowerCase())
                  );
              })
          )
        : porPrecio;

    // 5. Ordenar
    const productosOrdenados = [...productosFiltrados].sort((a, b) => {
        if (orden === "mayor") return b.precio - a.precio;
        if (orden === "menor") return a.precio - b.precio;
        return 0;
    });

    const productosMostrados = productosOrdenados.slice(0, visibles);

    return (
        <div className="cards-contenedor">
            <div className="cards-grid">
                {productosMostrados.map(producto => (
                    <div key={producto.id} className="card">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="card-imagen"
                        />

                        {producto.tag && (
                            <span className={`card-tag ${producto.tag === "Oferta" ? "oferta" : ""}`}>
                                {producto.tag}
                            </span>
                        )}

                        <div className="card-info">
                            <p className="card-nombre">{producto.nombre}</p>
                            <p className="card-subtitulo">
                                {[producto.color, producto.almacenamiento].filter(Boolean).join(" · ")}
                            </p>
                            <p className="card-precio">${producto.precio}</p>
                        </div>

                        <button
                            className="card-detalles"
                            onClick={() => navigate(`/producto/${producto.id}`)}
                        >
                            Ver detalles
                        </button>
                        <button
                            className="card-boton"
                            onClick={() => agregarAlCarrito(producto)}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>

            {visibles < productosOrdenados.length && (
                <button
                    className="ver-mas-boton"
                    onClick={() => setVisibles(visibles + 8)}
                >
                    Ver más
                </button>
            )}
        </div>
    );
}

export default Cards;