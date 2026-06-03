// IMPORTO LAS IMAGENES
import iphone17_orange from "../assets/images/iphone-17-pro-max-orange.jpg";
import iphone17_white from "../assets/images/iphone-17-pro-max-white.jpg";

export const productos = [
  {
    id: 1,
    nombre: "iPhone 17 Pro Max",
    categoria: "iPhone",
    precio: 1399,
    imagen: iphone17_orange,
    descripcion: "El iPhone más avanzado. Pantalla Super Retina XDR 6.9\", chip A19 Pro, cámara 48MP y batería de hasta 39 horas.",
    stock: 10,
    tag: "Nuevo"
  },
  {
    id: 2,
    nombre: "iPhone 17",
    categoria: "iPhone",
    precio: 1200,
    imagen: iphone17_white,
    descripcion: "El iPhone 17 estándar con chip A19, pantalla de 6.1\" y 120Hz por primera vez en el modelo base.",
    stock: 15,
    tag: "Nuevo"
  },
  
  {
    id: 3,
    nombre: "AirPods Pro 2",
    categoria: "AirPods",
    precio: 449,
    imagen: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=png-alpha",
    descripcion: "Cancelación activa de ruido adaptativa, audio espacial personalizado y hasta 30 horas de batería.",
    stock: 30,
    tag: "Oferta"
  }
];