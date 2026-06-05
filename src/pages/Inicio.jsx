import CarruselProductos from "../components/CarruselProductos";
import CarruselPublicidad from "../components/CarruselPublicidad";
import FilaProductos from "../components/FilaProductos";
import Beneficios from "../components/Beneficios";

function Inicio() {
  return (
    <main className="inicio">
      <CarruselProductos />
      <Beneficios />



      <FilaProductos
        titulo="Productos más vendidos"
        subtitulo="Los favoritos de nuestros clientes"
        categoria="iPhone"
      />

      <CarruselPublicidad />

      <FilaProductos
        titulo="Computación"
        subtitulo="MacBook, Mac Mini y más"
        categoria="Mac"
      />

      <FilaProductos
        titulo="Audio"
        subtitulo="AirPods para cada estilo"
        categoria="AirPods"
      />
      {/* Accesorios */}

      <FilaProductos
        titulo="Accesorios"
        subtitulo="Cargadores, fundas y más"
        categoria="Accesorios"
      />

    </main>
  );
}

export default Inicio;