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

    const [mostrarModal, setMostrarModal] = useState(false);

    const envio = total > 2000 ? 0 : 50;
    const seguro = total * 0.02;
    const importacion = total * 0.08;
    const totalFinal = total + envio + seguro + importacion;

    const confirmarCompra = () => {
        vaciarCarrito();
        setMostrarModal(false);
        alert("¡Compra realizada con éxito!");
    };

    if (carrito.length === 0) {
        return (
            <div className="container carrito-container text-center py-5">
                <h1 className="carrito-titulo">Mi carrito</h1>
                <h3>Tu carrito está vacío</h3>
            </div>
        );
    }

    return (
        <div className="container carrito-container">
            <h1 className="carrito-titulo">Mi carrito</h1>

            <div className="row g-4 align-items-start">

                <div className="col-lg-7">

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

                                        <h4>{producto.nombre}</h4>

                                        <p className="text-muted">
                                            {[producto.color, producto.almacenamiento]
                                                .filter(Boolean)
                                                .join(" · ")}
                                        </p>

                                        <p>
                                            Precio unitario:
                                            <strong> ${producto.precio}</strong>
                                        </p>

                                        <div className="cantidad-control">

                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={() => disminuirCantidad(producto.id)}
                                            >
                                                -
                                            </button>

                                            <span>{producto.cantidad}</span>

                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={() => aumentarCantidad(producto.id)}
                                            >
                                                +
                                            </button>

                                        </div>

                                        <p className="mt-3">
                                            Subtotal:
                                            <strong>
                                                ${producto.precio * producto.cantidad}
                                            </strong>
                                        </p>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => eliminarProducto(producto.id)}
                                        >
                                            Eliminar
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="col-lg-5">

                    <div className="card shadow-sm resumen-card">
                        <div className="card-body">

                            <h3>Resumen</h3>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <span>Productos</span>
                                <span>{cantidadTotal}</span>
                            </div>

                            <div className="d-flex justify-content-between">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <div className="d-flex justify-content-between">
                                <span>Envío</span>
                                <span>
                                    {envio === 0
                                        ? "Gratis"
                                        : `$${envio.toFixed(2)}`}
                                </span>
                            </div>

                            <div className="d-flex justify-content-between">
                                <span>Seguro</span>
                                <span>${seguro.toFixed(2)}</span>
                            </div>

                            <div className="d-flex justify-content-between">
                                <span>Importación</span>
                                <span>${importacion.toFixed(2)}</span>
                            </div>

                            <hr />

                            <h4>
                                Total: ${totalFinal.toFixed(2)}
                            </h4>

                            <small className="text-muted d-block mb-3">
                                Incluye logística y gestión de importación.
                            </small>

                            <button
                                className="btn btn-primary w-100"
                                onClick={() => setMostrarModal(true)}
                            >
                                Confirmar compra
                            </button>

                        </div>
                    </div>

                </div>
            </div>

            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal-personalizado">

                        <h3>Confirmar compra</h3>

                        <p>
                            ¿Deseás finalizar la compra por
                            <strong> ${totalFinal.toFixed(2)}</strong>?
                        </p>

                        <div className="modal-botones">

                            <button
                                className="btn btn-secondary"
                                onClick={() => setMostrarModal(false)}
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