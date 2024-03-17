import { useState } from "react";
import "../assets/Style.css"
import logo from "../image/logo.png";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

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
          </ul>
          <SearchBar />
          {/* <form className="d-flex">
            <input
              className="form-control me-2" type="search" placeholder="Busca aquí nuestros productos" aria-label="Search"/>
              <button className="btn btn-outline-success me-3" type="submit"> Buscar </button>
          </form> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/login/register" className="ingus nav-link btn">
                Ingresar
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

//CODIGO POR SI LA EMBARRO
// import { useState } from "react";
// import "../assets/Style.css"
// import logo from "../image/logo.png";
// import { NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar";

// export const Navbar = () => {
//   return (
//     <header className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <NavLink to="/" className="navbar-brand">
//           <img className="logo" src={logo} alt="Logo" />
//         </NavLink>
        
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-3 mb-lg-0">
//             <li className="nav-item">
//               <NavLink to="/products" className="nav-link bold-text">
//               Nuestros Productos
//               </NavLink>
//             </li>
//           </ul>
//           <SearchBar />
//           {/* <form className="d-flex">
//             <input
//               className="form-control me-2" type="search" placeholder="Busca aquí nuestros productos" aria-label="Search"/>
//               <button className="btn btn-outline-success me-3" type="submit"> Buscar </button>
//           </form> */}
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink to="/login/register" className="ingus nav-link btn">
//                 Ingresar
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;
