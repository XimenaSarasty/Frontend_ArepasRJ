import "../assets/Style.css"
import logo from "../assets/logo.png"
import { NavLink, Outlet } from "react-router-dom"
import Products from './../pages/Products';

export const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/products" className="nav-link bold-text">
              Nuestros Productos
              </NavLink>
            </li>

    <header className="navContainer d-flex  py-3 ">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none">
        <img className="logo" src={logo} alt="" />
      </a>
      <div>
        <ul className="nav">
          <li className="linkInicio nav-item"><a href="/Products" className="navMenuText nav-link">Nuestros Productos</a></li>
          <li className="linkQuincho nav-item"><a href="#" className="navMenuText nav-link">Contacto</a></li>
          <input className="searchHome" placeholder="Busca aquí nuestros productos" type="text" />
          <li className="navJoin nav-item"><NavLink href="#" className="navMenuTextJoin nav-link" to="/login/register" >Ingresar</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

