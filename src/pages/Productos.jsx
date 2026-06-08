import Filtros from '../components/Filtros'
import Cards from '../components/Cards'
import { useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { filtroOtros, filtrosAccesorios, filtrosComputacion, filtrosAudio, filtrosMoviles } from '../data/filtros'

const mapaFiltros = {
    iphone:      filtrosMoviles,
    audio:       filtrosAudio,
    computacion: filtrosComputacion,
    accesorios:  filtrosAccesorios,
    otros:       filtroOtros,
}

function Productos() {
    const [searchParams] = useSearchParams()
    const cat = searchParams.get("cat")
    const filtrosActivos = mapaFiltros[cat] || []
    const [seleccionados, setSeleccionados] = useState({})

    useEffect(() => {
        setSeleccionados({})  // limpia filtros al cambiar de categoría
    }, [cat])

    return (
        <div className="pagina-productos">
            <Filtros datos={filtrosActivos} seleccionados={seleccionados} setSeleccionados={setSeleccionados} />
            <Cards seleccionados={seleccionados} datos={filtrosActivos} cat={cat} />
        </div>
    )
}

export default Productos