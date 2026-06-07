import { useState } from 'react'
import { productos } from '../data/productos'

function Cards({ seleccionados, datos }) {
    const [visibles, setVisibles] = useState(8)  

    const hayFiltros = Object.values(seleccionados).some(v => v === true)

    const productosFiltrados = hayFiltros
        ? productos.filter(p => {
            return datos.every(filtro => {
                const opcionesSeleccionadas = filtro.opciones.filter(op => seleccionados[op])
                if (opcionesSeleccionadas.length === 0) return true
                return opcionesSeleccionadas.some(op =>
                    filtro.exacto
                        ? p[filtro.campo]?.toLowerCase() === op.toLowerCase()
                        : p[filtro.campo]?.toLowerCase().includes(op.toLowerCase())
                    )
            })
        })
        : productos

    const productosMostrados = productosFiltrados.slice(0, visibles)

    return (
        <div className="cards-contenedor">
            <div className="cards-grid">
                {productosMostrados.map((producto) => (  
                    <div key={producto.id} className="card">
                        <img src={producto.imagen} alt={producto.nombre} className="card-imagen" />

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

                        <button className="card-boton">Agregar al carrito</button>
                    </div>
                ))}
            </div>

            {visibles < productosFiltrados.length && (
                <button className="ver-mas-boton" onClick={() => setVisibles(visibles + 8)}>
                    Ver más
                </button>
            )}
        </div>
    )
}

export default Cards