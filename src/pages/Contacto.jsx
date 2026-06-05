import React, { useState } from "react";

const Contacto = ({ carrito = [{ id: 1, nombre: "iPhone de prueba" }] }) => {
  // En vez de tener: const [nombre, setNombre] = useState("");
  // Usamos UN SOLO objeto para agrupar los datos:
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    entrega: "correo",
    mensaje: "" 
  });

  // Y para los errores, también usamos un objeto:
  const [errores, setErrores] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: ""
  });

 // 1. FUNCIÓN QUE ESCUCHA TODOS LOS INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Guarda dinámicamente en nombre o email
    });

    // Si escribe y había error en ese campo, lo limpia
    if (errores[name]) {
      setErrores({ ...errores, [name]: "" });
    }
  };

  // 2. FUNCIÓN QUE VALIDA AL ENVIAR
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación del carrito vacío (Freno de mano inicial). Si esta vacion no hace falta que verifique lo demas
    if (carrito.length === 0) {
      alert("Tu carrito está vacío. Agregá algún Producto antes de finalizar la compra.");
      return; // Corta la función acá, no deja avanzar a los errores ni al éxito
    }
    
    // Objeto temporal para juntar los errores que encontremos
    const nuevosErrores = {};

    // Validación de Nombre (ahora se lee desde formData.nombre)
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular que solo acepta letras y espacios
    if (formData.nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre y apellido son obligatorios.";
    } else if (!regexLetras.test(formData.nombre)) {
      nuevosErrores.nombre = "El nombre solo puede contener letras."; 
    }

    // VALIDACIÓN DE EMAIL
    if (formData.email.trim() === "") {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      nuevosErrores.email = "El formato del email no es válido.";
    }

    // Validacion de telefono
    const regexNumeros = /^[0-9\s+-]+$/; // Expresión regular que solo acepta números, espacios, + y -
    if (formData.telefono.trim() === "") {
      nuevosErrores.telefono = "El telefono es obligatorio"
    } else if (!regexNumeros.test(formData.telefono)) {
      nuevosErrores.telefono = "El teléfono solo puede contener números.";
    }

    // Validacion para la Direccion
    if (formData.direccion.trim() === "") {
      nuevosErrores.direccion = "La direccion o localidad es obligatoria"
    }

    // Si encontramos algún error, lo guardamos en el estado y frenamos
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return; // Freno de mano
    }

    // Si pasó todo, procesa
    alert(`¡Formulario válido! Procesando compra para: ${formData.nombre}`);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="mb-4 text-center fw-bold">Contacto</h2>
            
            <form onSubmit={handleSubmit}>
              
              {/* Input de Nombre */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre y Apellido</label>
                <input
                  type="text"
                  name="nombre" // <--- Clave para que handleChange sepa qué campo es
                  className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
                  placeholder="Pepito Pérez"
                  value={formData.nombre} // <--- Ahora lee del objeto formData
                  onChange={handleChange} // <--- Usa la nueva función unificada
                />
                {errores.nombre && (
                  <div className="invalid-feedback">{errores.nombre}</div>
                )}
              </div>

              {/* Input de Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email" // <--- Clave para el email
                  className={`form-control ${errores.email ? "is-invalid" : ""}`}
                  placeholder="pepito@ejemplo.com"
                  value={formData.email} // <--- Lee el email del objeto formData
                  onChange={handleChange} // <--- Usa la misma función de arriba
                />
                {errores.email && (
                  <div className="invalid-feedback">{errores.email}</div>
                )}
              </div>

              {/* Input del Telefono */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Telefono</label>
                <input
                  type="tel"
                  name="telefono" // <--- Clave para que handleChange sepa qué campo es
                  className={`form-control ${errores.telefono ? "is-invalid" : ""}`}
                  placeholder="123456"
                  value={formData.telefono} // <--- Ahora lee del objeto formData
                  onChange={handleChange} // <--- Usa la nueva función unificada
                />
                {errores.telefono && (
                  <div className="invalid-feedback">{errores.telefono}</div>
                )}
              </div>

              {/* Input para la direccion */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Direccion o localidad</label>
                <input
                  type="text"
                  name="direccion" // <--- Clave para que handleChange sepa qué campo es
                  className={`form-control ${errores.direccion ? "is-invalid" : ""}`}
                  placeholder="Direccion"
                  value={formData.direccion} // <--- Ahora lee del objeto formData
                  onChange={handleChange} // <--- Usa la nueva función unificada
                />
                {errores.direccion && (
                  <div className="invalid-feedback">{errores.direccion}</div>
                )}
              </div>

              {/* Select: Método de Entrega */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Método de Entrega</label>
                <select
                  name="entrega" // <--- Conecta con formData.entrega
                  className="form-select"
                  value={formData.entrega}
                  onChange={handleChange}
                >
                  <option value="correo">Envío por Correo Argentino</option>
                  <option value="sucursal">Retiro en Sucursal</option>
                </select>
              </div>

              {/* Textarea: Mensaje Opcional */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Mensaje o Aclaración (Opcional)</label>
                <textarea
                  name="mensaje" // <--- Conecta con formData.mensaje
                  className="form-control"
                  rows="3"
                  placeholder="Ej: Tocar timbre 2B, dejar en recepción..."
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Botón */}
              <button type="submit" className="btn btn-dark w-100 py-2.5 fw-semibold shadow-sm">
                Finalizar compra
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
