import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"; 
import logo from '../assets/iconoMarket.png'


function Footer() {
  return (
    <>
    <header className="footer-container">
   
      <nav className="footer-nav">
        <ul>
          <li>
            <Link to="/" className="footer-link">
              Preguntas Frecuentes
            </Link>
          </li>
          <li>Blog</li>
          <li>Términos y Condiciones</li>
          <li>Políticas de Privacidad</li>
        </ul>
      </nav>
      <div className="footer-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </header>
    </>
  );
}

export default Footer;
