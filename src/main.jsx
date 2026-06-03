import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/navBar.css'
import './styles/productos.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// icons bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
