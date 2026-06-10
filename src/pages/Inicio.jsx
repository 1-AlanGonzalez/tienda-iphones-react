import CarruselProductos from "../components/CarruselProductos";
import CarruselPublicidad from "../components/CarruselPublicidad";
import FilaProductos from "../components/FilaProductos";
import FilaProductosPocoStock from "../components/FilaProductosPocoStock";
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
      <FilaProductosPocoStock
        titulo="Últimas unidades"
        subtitulo="Aprovechá antes de que se agoten"
        />
      

      <FilaProductos
        titulo="Computación"
        subtitulo="MacBook, Mac Mini y más"
        categoria="Computación"
      />

      <FilaProductos
        titulo="Audio"
        subtitulo="AirPods para cada estilo"
        categoria="Audio"
      />

      <FilaProductos
        titulo="Accesorios"
        subtitulo="Cargadores, fundas y más"
        categoria="Accesorios"
      />

    </main>
  );
}

export default Inicio;