import CarruselProductos from "../components/CarruselProductos";
import CarruselPublicidad from "../components/CarruselPublicidad";
import FilaProductos from "../components/FilaProductos";
import Beneficios from "../components/Beneficios";

function Inicio() {
  return (
    <main className="inicio">
      <CarruselProductos />
      <Beneficios />
      <CarruselPublicidad />

      <FilaProductos
        titulo="🔥 Ofertas destacadas"
        categoria="iPhone"
      />


      <FilaProductos
        titulo="💻 Computación"
        categoria="Mac"
      />


      <FilaProductos
        titulo="🎧 Audio"
        categoria="AirPods"
      />
      <CarruselPublicidad />

      <FilaProductos
        titulo="⌚ Accesorios"
        categoria="Watch"
      />

    </main>
  );
}

export default Inicio;