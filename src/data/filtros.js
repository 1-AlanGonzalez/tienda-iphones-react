export const filtrosMoviles = [
    { id: "modelo",         titulo: "Modelo",         campo: "nombre",         exacto: false, opciones: ["iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17"] },
    { id: "almacenamiento", titulo: "Almacenamiento",  campo: "almacenamiento", exacto: true,  opciones: ["128GB", "256GB", "512GB"] },
    { id: "color",          titulo: "Color",           campo: "color",          exacto: true,  opciones: ["Negro", "Blanco", "Verde", "Azul", "Celeste"] },
    { id: "linea",          titulo: "Linea",           campo: "linea",          exacto: true,  opciones: ["Standard", "Plus", "Pro", "Pro Max"] },
]

export const filtrosAudio = [
    { id: "modelo",      titulo: "Modelo",              campo: "nombre",      opciones: ["AirPods 2", "AirPods 3", "AirPods 4", "AirPods Pro", "AirPods Max"] },
    { id: "cancelacion", titulo: "Cancelacion de ruido", campo: "cancelacion", opciones: ["Sí", "No"] },
    { id: "conector",    titulo: "Conector",             campo: "conector",    opciones: ["Lightning", "USB-C", "Bluetooth"] },
]

export const filtrosComputacion = [
    { id: "modelo",         titulo: "Modelo",         campo: "nombre",         opciones: ["MacBook Air", "MacBook Pro", "iMac", "Mac Mini"] },
    { id: "chip",           titulo: "Chip",           campo: "chip",           opciones: ["M1", "M2", "M3", "M4"] },
    { id: "ram",            titulo: "RAM",            campo: "ram",            opciones: ["8GB", "16GB", "32GB", "64GB"] },
    { id: "almacenamiento", titulo: "Almacenamiento", campo: "almacenamiento", opciones: ["256GB", "512GB", "1TB", "2TB"] },
]

export const filtrosAccesorios = [
    { id: "tipo",       titulo: "Tipo",          campo: "tipo",       opciones: ["MagSafe", "Cases", "Cables", "Apple Watch"] },
    { id: "compatible", titulo: "Compatible", campo: "compatible", opciones: ["Iphone", "iPad", "Mac"] },
]

export const filtroOtros = [
    { id: "categoria", titulo: "Categoría", campo: "categoria", opciones: ["Cargadores", "Fundas", "Soportes", "Baterías"] },
]