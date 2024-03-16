import React from 'react';
import { NavLink } from "react-router-dom"
import logo from "../image/logo.png"
import "../assets/Style.css"
import Cookies from 'js-cookie';

const NavAdm = () => {

  const handleLogout = () => {
    const confirmed = window.confirm('¿Estás seguro de que quieres cerrar la sesión?');
    if (confirmed) {
      Cookies.remove('token');
      window.location.href = '/';
    }
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/admin" className="navbar-brand">
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
              <NavLink to="/admin/new-product" className="nav-link bold-text">
              Agregar Productos
              </NavLink>
            </li>
          <li className="nav-item">
              <NavLink to="/admin/shipment-fee" className="nav-link bold-text">
                Domicilios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/adm-order" className="nav-link bold-text">
                Pedidos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/roles/admin" className="nav-link bold-text">
                Cambio Roles
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2" type="search" placeholder="Busca aquí nuestros productos" aria-label="Search"/>
              <button className="btn btn-outline-success me-3" type="submit"> Buscar </button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
            <div className="dropdown">
              <button className=" ingus btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Opciones
              </button>
              <ul className="dropdown-menu">
                <li className="userp dropdown-item" onClick={handleLogout}>Cerrar sesión</li>
              </ul>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default NavAdm;