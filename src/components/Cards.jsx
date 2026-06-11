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

function BotonAgregar({ producto, agregarAlCarrito, stockActual }) {
    const [estado, setEstado] = useState('normal');

    const agotado = stockActual <= 0;

    if (agotado) {
        return (
            <button className="card-boton disabled" disabled>
                Agotado
            </button>
        );
    }

    const handleAgregar = () => {
        if (estado !== 'normal') return;
        setEstado('cargando');
        setTimeout(() => {
            agregarAlCarrito(producto);
            setEstado('exito');
            setTimeout(() => setEstado('normal'), 2000);
        }, 1000);
    };

    return (
        <button
            className={`card-boton ${estado === 'cargando' ? 'cargando' : ''} ${estado === 'exito' ? 'exito' : ''}`}
            onClick={handleAgregar}
            disabled={estado !== 'normal'}
        >
            {estado === 'normal' && "Agregar al carrito"}
            {estado === 'cargando' && (
                <>
                    <span className="spinner-carrito"></span>
                    Añadiendo...
                </>
            )}
            {estado === 'exito' && "✓ ¡Añadido!"}
        </button>
    );
}

function Cards({ seleccionados, datos, cat, precioMin, precioMax, orden }) {
    const [visibles, setVisibles] = useState(8);
    const { agregarAlCarrito, stocks } = useCart();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const busqueda = searchParams.get("busqueda") || "";

    const categoriaActual = mapaCategoria[cat];

    let base = categoriaActual
        ? productos.filter(p => p.categoria === categoriaActual)
        : cat === "ofertas"
        ? productos.filter(p => p.tag === "Oferta")
        : productos;

    if (busqueda.trim()) {
        const q = busqueda.toLowerCase();
        base = base.filter(p =>
            p.nombre.toLowerCase().includes(q) ||
            p.categoria?.toLowerCase().includes(q) ||
            p.color?.toLowerCase().includes(q) ||
            p.almacenamiento?.toLowerCase().includes(q)
        );
    }

    const porPrecio = base.filter(p => p.precio >= precioMin && p.precio <= precioMax);

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

    const productosOrdenados = [...productosFiltrados].sort((a, b) => {

    if (orden === "nuevos") {

        if (a.tag === "Nuevo" && b.tag !== "Nuevo") return -1
        if (a.tag !== "Nuevo" && b.tag === "Nuevo") return 1

        return 0
    }

    if (orden === "mayor") return b.precio - a.precio

    if (orden === "menor") return a.precio - b.precio

    return 0
})

    const productosMostrados = productosOrdenados.slice(0, visibles);

    return (
    <div className="cards-contenedor">

        <p className="cards-cantidad">
            {productosOrdenados.length}{" "}
            {productosOrdenados.length === 1 ? "producto" : "productos"}
        </p>

        <div className="cards-grid">
            {productosMostrados.map(producto => {
                const stockActual = stocks[producto.id] ?? 0;

                const descuento = producto.precioOriginal
                    ? Math.round(
                        (1 - producto.precio / producto.precioOriginal) * 100
                    )
                    : null;

                return (
                    <div
                        key={producto.id}
                        className={`card ${stockActual <= 0 ? "card-agotada" : ""}`}
                    >

                        {/* Tag */}
                        {stockActual <= 0 ? (
                            <span className="card-tag sinStock">
                                Sin stock
                            </span>
                        ) : producto.tag && (
                            <span
                                className={`card-tag ${
                                    producto.tag === "Oferta" ? "oferta" : ""
                                }`}
                            >
                                {producto.tag}
                            </span>
                        )}

                        {/* Imagen */}
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="card-imagen"
                            loading="lazy"
                        />

                        {/* Info */}
                        <div className="card-info">

                            <p className="card-subtitulo">
                                {[producto.color, producto.almacenamiento]
                                    .filter(Boolean)
                                    .join(" · ")}
                            </p>

                            <p className="card-nombre">
                                {producto.nombre}
                            </p>

                            {/* Precios */}
                            <div className="card-precios">

                                {producto.precioOriginal && (
                                    <div className="card-precio-anterior-wrap">
                                        <span className="card-precio-anterior">
                                            USD $
                                            {producto.precioOriginal.toLocaleString(
                                                "es-AR"
                                            )}
                                        </span>

                                        <span className="card-descuento">
                                            {descuento}% OFF
                                        </span>
                                    </div>
                                )}

                                <p className="card-precio">
                                    USD $
                                    {producto.precio.toLocaleString("es-AR")}
                                </p>

                                <p className="card-cuotas">
                                    12x $
                                    {Math.round(
                                        producto.precio / 12
                                    ).toLocaleString("es-AR")}{" "}
                                    sin interés
                                </p>
                            </div>

                            <p className="card-envio">
                             Envío gratis
                            </p>
                        </div>

                        {/* Acciones */}
                        <button
                            className="card-detalles"
                            onClick={() =>
                                navigate(`/producto/${producto.id}`)
                            }
                        >
                            Ver detalles
                        </button>

                        <BotonAgregar
                            producto={producto}
                            agregarAlCarrito={agregarAlCarrito}
                            stockActual={stockActual}
                        />
                    </div>
                );
            })}
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
);}

export default Cards;