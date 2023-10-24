import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; 
import logo from '../assets/iconoMarket.png'


function Header() {
  return (
    <>
    <header className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/" className="header-link">
              Productos
            </Link>
          </li>
          <li> <Link to="/recomendations" className="header-link">Recomendaciones</Link></li>
          <li>Iniciar Sesión</li>
        </ul>
      </nav>
    </header>
    <div className="columna2">
     <p>Medellin, Colombia</p>
    </div>
    </>
  );
}

export default Header;
