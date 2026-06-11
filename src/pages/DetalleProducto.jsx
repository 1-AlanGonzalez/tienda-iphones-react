import { useParams, useNavigate } from "react-router-dom";
import { productos } from "../data/productos";
import { useCart } from "../context/CartContext";
import { BsArrowLeft, BsCartPlus, BsCheckCircle, BsXCircle } from "react-icons/bs";
import "../styles/components/detalleProducto.css";

function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito, stocks } = useCart();

  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <div className="detalle-notfound">
        <p>Producto no encontrado.</p>
        <button onClick={() => navigate("/productos")}>Volver al catálogo</button>
      </div>
    );
  }

  const specs = [
    producto.linea         && { label: "Línea",                valor: producto.linea },
    producto.color         && { label: "Color",                 valor: producto.color },
    producto.almacenamiento && { label: "Almacenamiento",       valor: producto.almacenamiento },
    producto.chip          && { label: "Chip",                  valor: producto.chip },
    producto.ram           && { label: "Memoria RAM",           valor: producto.ram },
    producto.cancelacion   && { label: "Cancelación de ruido",  valor: producto.cancelacion },
    producto.conector      && { label: "Conector",              valor: producto.conector },
    producto.compatible    && { label: "Compatible con",        valor: producto.compatible },
    producto.tipo          && { label: "Tipo",                  valor: producto.tipo },
    producto.categoria     && { label: "Categoría",             valor: producto.categoria },
  ].filter(Boolean);

  const enStock = (stocks[producto.id] ?? 0) > 0;
  const descuento = producto.precioOriginal
    ? Math.round(
        (1 - producto.precio / producto.precioOriginal) * 100
      )
    : null;
  return (
    <main className="detalle-page">

      <button className="detalle-volver" onClick={() => navigate(-1)}>
        <BsArrowLeft /> Volver
      </button>

      <div className="detalle-contenedor">

        {/* IMAGEN */}
        <div className="detalle-imagen-wrap">
          {producto.tag && <span className="detalle-tag">{producto.tag}</span>}
          <img src={producto.imagen} alt={producto.nombre} className="detalle-imagen" />
        </div>

        {/* INFO */}
        <div className="detalle-info">

          <p className="detalle-categoria">{producto.categoria}</p>
          <h1 className="detalle-nombre">{producto.nombre}</h1>

          {(producto.color || producto.linea) && (
            <p className="detalle-subtitulo">
              {[producto.linea, producto.color].filter(Boolean).join(" · ")}
            </p>
          )}

         <div className="detalle-precios">

            {producto.precioOriginal && (
              <div className="detalle-precio-anterior-wrap">
                <span className="detalle-precio-anterior">
                  USD ${producto.precioOriginal.toLocaleString("es-AR")}
                </span>

                <span className="detalle-descuento">
                  {descuento}% OFF
                </span>
              </div>
            )}

            <p className="detalle-precio">
              USD ${producto.precio.toLocaleString("es-AR")}
            </p>

            <p className="detalle-cuotas">
              12 cuotas sin interés de $
              {Math.round(producto.precio / 12).toLocaleString("es-AR")}
            </p>

          </div>

          <p className="detalle-descripcion">{producto.descripcion}</p>

          <p className={`detalle-stock ${enStock ? "en-stock" : "sin-stock"}`}>
            {enStock
              ? <><BsCheckCircle /> En stock</>
              : <><BsXCircle /> Sin stock</>
            }
          </p>

          <button
            className="detalle-boton"
            disabled={!enStock}
            onClick={() => agregarAlCarrito(producto)}
          >
            <BsCartPlus /> Agregar al carrito
          </button>

          {/* ESPECIFICACIONES */}
          {specs.length > 0 && (
            <div className="detalle-specs">
              <h2 className="detalle-specs-titulo">Especificaciones</h2>
              <table className="detalle-specs-tabla">
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.label}>
                      <td className="spec-label">{s.label}</td>
                      <td className="spec-valor">{s.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

export default DetalleProducto;