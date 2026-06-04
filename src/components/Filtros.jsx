import { useState } from 'react'



function Filtros({datos, seleccionados, setSeleccionados}) {
    const [abiertos, setAbiertos] = useState({})

    const toggleFiltro = (nombre) => {
        setAbiertos({ ...abiertos, [nombre]: !abiertos[nombre] })
    }

    const toggleOpcion = (opcion) => {
        setSeleccionados({...seleccionados, [opcion]: !seleccionados[opcion] })
    }

    return (
        <div className="tarjetaFiltro">
            <h5 className="tarjetaFiltro-subtitulo">Categorías</h5>
            <nav>
                <ul className="tarjetaFiltro-lista">
                    {datos.map((filtro) => (
                        <li key={filtro.id}>
                            <div className="filtro-titulo"
                                onClick={() => toggleFiltro(filtro.id)}>
                                {filtro.titulo}
                                <span className={`flecha ${abiertos[filtro.id] ? "rotada" : ""}`}>⌄</span>
                            </div>
                            <ul className={`opciones ${abiertos[filtro.id] ? "abierto" : ""}`}>
                                {filtro.opciones.map((opcion) => (
                                    <li key={opcion}>
                                        <input 
                                            type="checkbox" 
                                            id={opcion} 
                                            checked={!!seleccionados[opcion]}
                                            onChange={() => toggleOpcion(opcion)}
                                        />
                                        <label htmlFor={opcion}>{opcion}</label>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Filtros