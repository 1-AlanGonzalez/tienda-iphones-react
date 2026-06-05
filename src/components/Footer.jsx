import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-auto border-top">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Logo / Nombre */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold m-0 text-primary">Apple Store</h5>
            <small className="text-muted">Tu tienda Apple de confianza.</small>
          </div>

          {/* Enlaces Rápidos */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <p className="m-0 text-muted">
              © {new Date().getFullYear()} UNAHUR - CIU
            </p>
          </div>

          {/* Redes / Datos de entrega */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://github.com/Brandonduce67/tienda-iphones-react" target="_blank" rel="noreferrer" className="text-white fs-5">
                <i className="bi bi-github"></i>
              </a>
              <span className="text-muted">|</span>
              <small className="text-muted d-flex align-items-center gap-1">
                <i className="bi bi-truck text-success"></i> Envíos a todo el país
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;