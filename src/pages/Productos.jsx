import Filtros from '../components/Filtros'
import Cards from '../components/Cards'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {filtrosAccesorios, filtrosComputacion, filtrosAudio, filtrosMoviles } from '../data/filtros'
import Ordenar from '../components/Ordenar'

const mapaFiltros = {
    iphone:      filtrosMoviles,
    audio:       filtrosAudio,
    computacion: filtrosComputacion,
    accesorios:  filtrosAccesorios,
}

const PRECIO_LIMITE = 2000

function Productos() {
    const [searchParams] = useSearchParams()
    const cat = searchParams.get("cat")
    const filtrosActivos = mapaFiltros[cat] || []
    const [seleccionados, setSeleccionados] = useState({})
    const [precioMin, setPrecioMin] = useState(0)
    const [precioMax, setPrecioMax] = useState(PRECIO_LIMITE)
    const [orden, setOrden] = useState("destacados")

    useEffect(() => {
        setSeleccionados({})
        setPrecioMin(0)              // también resetea el precio al cambiar categoría
        setPrecioMax(PRECIO_LIMITE)
    }, [cat])

    return (
        <div className="pagina-productos">
            <Filtros
                datos={filtrosActivos}
                seleccionados={seleccionados}
                setSeleccionados={setSeleccionados}
                precioMin={precioMin}
                setPrecioMin={setPrecioMin}
                precioMax={precioMax}
                setPrecioMax={setPrecioMax}
                precioLimite={PRECIO_LIMITE}
            />
            <div className='cards-contenedor-wrapper'>
                <Ordenar orden={orden} setOrden={setOrden} />
                
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