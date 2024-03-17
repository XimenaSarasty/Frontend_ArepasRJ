import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AddToCartIcon } from './Icons';

const CartasInfoSinLog = () => { 
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    };
    fetchProducts();
  }, []); 

  const handleAddToCart = () => {
    alert('Debes iniciar sesión para añadir productos al carrito.');
  };

  return (
    <div className="cartas-container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map(product => (
          product.idProduct ? (
            <div key={product.idProduct} className="col">
              <div className="card">
                {/* Renderiza la información del producto */}
                <img src={`http://localhost:8080/api/imageProduct/${product.idProduct}`} className="card-img-top" alt="producto" />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">{product.productDescription}</p>
                  <h2 className="card-price">${product.unityPrice}</h2>
                  <button onClick={handleAddToCart}
                  className='btn btn-primary btn-carrito'>
                    <AddToCartIcon />
                  </button>
                </div> 
              </div>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default CartasInfoSinLog;
