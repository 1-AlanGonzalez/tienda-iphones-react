import {productos} from '../data/productos'



function Cards({ seleccionados, datos }) {
    const hayFiltros = Object.values(seleccionados).some(v => v === true)

    const productosFiltrados = hayFiltros
        ? productos.filter(p => {
            return datos.every(filtro => {
                const opcionesSeleccionadas = filtro.opciones.filter(op => seleccionados[op])
                if (opcionesSeleccionadas.length === 0) return true
                return opcionesSeleccionadas.some(op =>
                    p.nombre.toLowerCase().includes(op.toLowerCase()) ||
                    p.categoria.toLowerCase().includes(op.toLowerCase()) ||
                    p.linea.toLowerCase().includes(op.toLowerCase()) ||
                    p.color?.toLowerCase().includes(op.toLowerCase()) ||
                    p.memoria?.toLowerCase().includes(op.toLowerCase()) ||
                    p.chip?.toLowerCase().includes(op.toLowerCase()) ||
                    p.ram?.toLowerCase().includes(op.toLowerCase()) ||
                    p.almacenamiento?.toLowerCase().includes(op.toLowerCase())
                )
            })
        })
        : productos

    return (
        <div className="cards-grid">
            {productosFiltrados.map((producto) => (
                <div key={producto.id} className="card">
                    <img src={producto.imagen} alt={producto.nombre} className="card-imagen" />
                    <div className="card-info">
                        <p className="card-nombre">{producto.nombre}</p>
                        <p className="card-precio">${producto.precio}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards