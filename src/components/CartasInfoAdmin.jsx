import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (idProduct) => {
    try {
      await axios.delete(`http://localhost:8080/api/deleteProduct/${idProduct}`);
      setProducts(products.filter(product => product.idProduct !== idProduct));
      alert('Producto eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      alert('Ocurrió un error al eliminar el producto');
    }
  };

  return (
    <div className="cartas-container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product) => (
          product.idProduct ? (
            <div key={product.idProduct} className="col">
              <div className="card">
                {/* Renderiza la información del producto */}
                <img
                  src={`http://localhost:8080/api/imageProduct/${product.idProduct}`}
                  className="card-img-top"
                  alt="producto"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">{product.productDescription}</p>
                  <h2 className="card-price">${product.unityPrice}</h2>
                  <div className='btn-edit-delete'>
                  <Link to={`${product.idProduct}/edit-prod`}>                 
                      <button className="btn btn-primary btn-editar">Editar</button> 
                  </Link>  
                  <button onClick={() => handleDelete(product.idProduct)} className='btn btn-danger'>Eliminar</button> 
                  </div>               
                </div>
              </div>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default Products;
