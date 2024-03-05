import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { NavLink } from "react-router-dom"
import logo from "../image/logo.png"
import "../assets/Style.css"

const NavAdm = () => {
  return (
    <div>
      <header className="navContainer d-flex py-3">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div>
        <ul className="nav">
          <li className="linkInicio nav-item"><a href="#" className="navMenuText nav-link">Productos Agregados</a></li>
          <li className="navJoin nav-item"><NavLink href="#" className="navMenuTextJoin nav-link" to="http://localhost:5173" >Cerrar Sesión</NavLink></li>
        </ul>
      </div>
      </header>
    </div>
  )
}
export default NavAdm;
