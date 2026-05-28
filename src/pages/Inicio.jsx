import { Link } from "react-router-dom";
import "../styles/inicio.css";
import IphoneModel from "../components/IphoneModel";


function Inicio() {
  return (
    <main className="inicio">

      {/* ── HERO ── */}
      <section className="hero">
  <div className="hero-text">
    <p className="eyebrow">Apple Argentina — oficial</p>
    <h1>Conseguí<br />los mejores <br /><em>dispositivos.</em></h1>
    <p className="hero-sub">
      Los productos Apple más recientes, con garantía oficial,
      envío a todo el país y financiación en cuotas sin interés.
    </p>
    <div className="hero-btns">
      <Link to="/productos" className="btn-primary">Explorar catálogo</Link>
      <Link to="/productos" className="btn-ghost">Ver ofertas →</Link>
    </div>
  </div>

    <div className="hero-visual">

  <div className="hero-product-card">

    <span className="nuevo-producto">
      Nuevo lanzamiento
    </span>

    <h2 className="hero-title">
      iPhone 17 Pro Max
    </h2>

    <p className="product-desc">
      {/* Descripcion del iphone 17 Pro Max */}
        El iPhone 17 Pro Max es el último modelo de Apple, con una pantalla Super Retina XDR de 6.7 pulgadas, un chip A17 Bionic ultrarrápido, un sistema de cámara Pro con mejoras en fotografía nocturna y video, y una batería de larga duración. Disponible en varios colores elegantes y con opciones de almacenamiento desde 128GB hasta 1TB.
    </p>

    <IphoneModel />

  </div>

</div>
</section>

    </main>
  );
}

export default Inicio;