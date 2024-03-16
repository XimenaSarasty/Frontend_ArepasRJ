import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState({
        productName: '',
      });
    const handleSubmit = async (e) => {
        e.preventDefault(); 
      
        try {
          const response = await fetch('/api/searchProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(searchTerm),            
          });
      
          console.log(response.data); // Aquí puedes manejar la respuesta del servidor (lista de productos)
        } catch (error) {
          console.error(error); // Manejar posibles errores en la petición
        }
      };

  return (
  <div>
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Busca aquí nuestros productos"
        aria-label="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} // Actualizando el estado con el término ingresado
      />
      <button className="btn btn-outline-success me-3" type="submit">
        Buscar
      </button>
    </form>
  </div>
);
  };
export default SearchBar;
