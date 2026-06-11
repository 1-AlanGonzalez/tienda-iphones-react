import Filtros from '../components/Filtros'
import Cards   from '../components/Cards'
import Ordenar from '../components/Ordenar'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {filtrosAccesorios, filtrosComputacion, filtrosAudio, filtrosMoviles } from '../data/filtros'


const mapaFiltros = {
    iphone:      filtrosMoviles,
    audio:       filtrosAudio,
    computación: filtrosComputacion,
    accesorios:  filtrosAccesorios,
}

const PRECIO_LIMITE = 2000

function Productos() {
    const [searchParams] = useSearchParams()
    const cat = searchParams.get("cat")
    const filtrosActivos = mapaFiltros[cat] || []

    const [seleccionados, setSeleccionados] = useState({})
    const [precioMin,     setPrecioMin]     = useState(0)
    const [precioMax,     setPrecioMax]     = useState(PRECIO_LIMITE)
    const [orden,         setOrden]         = useState("destacados")
    const [panelAbierto,  setPanelAbierto]  = useState(null)

    const togglePanel = (nombre) => {
        setPanelAbierto(prev => prev === nombre ? null : nombre)
    }

    // Al elegir un orden en mobile, cierra el panel
    const handleOrden = (valor) => {
        setOrden(valor)
        setPanelAbierto(null)
    }

    useEffect(() => {
        setSeleccionados({})
        setPrecioMin(0)
        setPrecioMax(PRECIO_LIMITE)
        setPanelAbierto(null)
    }, [cat])

    const filtrosProps = {
        datos: filtrosActivos,
        seleccionados, setSeleccionados,
        precioMin, setPrecioMin,
        precioMax, setPrecioMax,
        precioLimite: PRECIO_LIMITE,
    }

    return (
        <div className="pagina-productos">

            {/* Sidebar desktop */}
            <div className="filtros-desktop">
                <Filtros {...filtrosProps} />
            </div>

            <div className="cards-contenedor-wrapper">

                {/* Ordenar desktop */}
                <div className="ordenar-desktop">
                    <Ordenar orden={orden} setOrden={setOrden} />
                </div>

                {/* Toolbar mobile */}
                <div className="mobile-toolbar">
                    <div className="mobile-toolbar-inner">
                        <button
                            className={`mobile-toolbar-btn ${panelAbierto === "categorias" ? "activo" : ""}`}
                            onClick={() => togglePanel("categorias")}
                        >
                            ⠿ Categorías
                        </button>
                        <button
                            className={`mobile-toolbar-btn ${panelAbierto === "ordenar" ? "activo" : ""}`}
                            onClick={() => togglePanel("ordenar")}
                        >
                            ≡ Filtros
                        </button>
                    </div>

                    {panelAbierto === "categorias" && (
                        <div className="mobile-panel">
                            <Filtros {...filtrosProps} />
                        </div>
                    )}

                    {panelAbierto === "ordenar" && (
                        <div className="mobile-panel">
                            <Ordenar orden={orden} setOrden={handleOrden} inline={true} />
                        </div>
                    )}
                </div>

                <Cards
                    seleccionados={seleccionados}
                    datos={filtrosActivos}
                    cat={cat}
                    precioMin={precioMin}
                    precioMax={precioMax}
                    orden={orden}
                />
            </div>

        </div>
    )
}

export default Productos