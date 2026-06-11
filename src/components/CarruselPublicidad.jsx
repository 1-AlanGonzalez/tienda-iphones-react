import { useState, useEffect } from "react";
import "../styles/pages/inicio.css";
// importar imagenes de publicidad

import mac from "../assets/images/mac.jpg";
import mac_wallpp from "../assets/images/mac_wallpp.jpg";
import airpods from "../assets/images/airpods.jpg";

const banners = [mac, mac_wallpp, airpods];

function CarruselPublicidad() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActual(prev => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner-section">
      <img
        src={banners[actual]}
        alt="Publicidad"
        className="banner-img"
      />
    </section>
  );
}

export default CarruselPublicidad;