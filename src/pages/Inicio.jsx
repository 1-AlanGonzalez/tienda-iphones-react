import { Link } from "react-router-dom";
import "../styles/inicio.css";
import CarruselProductos from "../components/CarruselProductos";

 function Inicio() {
  return (
    <main className="inicio">

      <section className="hero">
  

        <div className="hero-visual">
          <CarruselProductos />
        </div>
      </section>

    </main>
  );
}

export default Inicio;