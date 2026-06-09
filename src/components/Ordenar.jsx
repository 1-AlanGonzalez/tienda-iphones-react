import { useState } from 'react'

const opciones = [
    { valor: "destacados", label: "Destacados" },
    { valor: "mayor", label: "Mayor precio" },
    { valor: "menor", label: "Menor precio" },
]

function Ordenar({ orden, setOrden }) {
    const [abierto, setAbierto] = useState(false)

    const labelActual =
        opciones.find(o => o.valor === orden)?.label

    return (
        <div className="ordenar-contenedor">
            <div
                className="ordenar-selector"
                onClick={() => setAbierto(!abierto)}
            >
                <span>{labelActual}</span>
            </div>

            {abierto && (
                <ul className="ordenar-opciones">
                    {opciones.map(op => (
                        <li
                            key={op.valor}
                            className={`ordenar-opcion ${
                                orden === op.valor
                                    ? "activa"
                                    : ""
                            }`}
                            onClick={() => {
                                setOrden(op.valor)
                                setAbierto(false)
                            }}
                        >
                            {op.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Ordenar