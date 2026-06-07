import { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/carrito.css";

function Carrito() {

    const {
        carrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
        vaciarCarrito,
        cantidadTotal,
        total
    } = useCart();

    const [mostrarConfirmacion, setMostrarConfirmacion] =
        useState(false);

    const confirmarCompra = () => {
        vaciarCarrito();
        setMostrarConfirmacion(false);

        alert("¡Compra realizada con éxito!");
    };

    return (
        <div className="container carrito-container">

            <h1 className="carrito-titulo">
                Mi carrito
            </h1>

            {carrito.length === 0 ? (
                <div className="text-center py-5">
                    <h3>Tu carrito está vacío</h3>
                </div>
            ) : (

                <div className="row">

                    {/* PRODUCTOS */}

                    <div className="col-lg-8">

                        {carrito.map(producto => (

                            <div
                                key={producto.id}
                                className="card shadow-sm mb-4 carrito-card"
                            >

                                <div className="card-body">

                                    <div className="carrito-producto">

                                        <img
                                            src={producto.imagen}
                                            alt={producto.nombre}
                                            className="carrito-imagen"
                                        />

                                        <div className="carrito-info">

                                            <h4>
                                                {producto.nombre}
                                            </h4>

                                            <p>
                                                Precio unitario:
                                                <strong>
                                                    {" "}
                                                    ${producto.precio}
                                                </strong>
                                            </p>

                                            <div className="cantidad-control">

                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() =>
                                                        disminuirCantidad(
                                                            producto.id
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>

                                                <span>
                                                    {producto.cantidad}
                                                </span>

                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() =>
                                                        aumentarCantidad(
                                                            producto.id
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>

                                            </div>

                                            <p className="mt-3">

                                                Subtotal:

                                                <strong>
                                                    {" "}
                                                    $
                                                    {producto.precio *
                                                        producto.cantidad}
                                                </strong>

                                            </p>

                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    eliminarProducto(
                                                        producto.id
                                                    )
                                                }
                                            >
                                                Eliminar
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* RESUMEN */}

                    <div className="col-lg-4">

                        <div className="card shadow-sm resumen-card">

                            <div className="card-body">

                                <h3>
                                    Resumen
                                </h3>

                                <hr />

                                <p>
                                    Productos:
                                    {" "}
                                    {cantidadTotal}
                                </p>

                                <h4>
                                    Total:
                                    {" "}
                                    ${total}
                                </h4>

                                <button
                                    className="btn btn-primary w-100 mt-3"
                                    onClick={() =>
                                        setMostrarConfirmacion(true)
                                    }
                                >
                                    Confirmar compra
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* MODAL SIMPLE */}

            {mostrarConfirmacion && (

                <div className="modal-overlay">

                    <div className="modal-personalizado">

                        <h3>
                            Confirmar compra
                        </h3>

                        <p>
                            ¿Deseás finalizar la compra
                            por ${total}?
                        </p>

                        <div className="modal-botones">

                            <button
                                className="btn btn-secondary"
                                onClick={() =>
                                    setMostrarConfirmacion(false)
                                }
                            >
                                Cancelar
                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={confirmarCompra}
                            >
                                Finalizar compra
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Carrito;