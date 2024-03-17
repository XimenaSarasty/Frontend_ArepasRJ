import React, { useState } from 'react';
import NavAdm from '../components/NavAdm'
import CartasinfoAdmin from '../components/CartasInfoAdmin';

const HomeAdmView = () => {

    const [filteredProducts, setFilteredProducts] = useState([]);
  
    const handleSearch = (products) => {
      setFilteredProducts(products); 
    };

    
  return (
    <div>
      <NavAdm onSearch={handleSearch} />      
      <CartasinfoAdmin onSearch={handleSearch} filteredProducts={filteredProducts} />
    </div>
  )
}

export default HomeAdmView