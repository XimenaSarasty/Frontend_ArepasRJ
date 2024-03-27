import React, { useContext, useState, useEffect } from 'react';
import { cartContext } from '../context/cartContext';

const CartElements = () => {
  const { cart, setCart } = useContext(cartContext);
       
  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

   const [productMap, setProductMap] = useState(() => {
    const initialProductMap = {};
    cart.forEach((product) => {
      if (product.idProduct in initialProductMap) {
        initialProductMap[product.idProduct].productQuantity += 1;
        initialProductMap[product.idProduct].totalPrice += product.unityPrice;
      } else {
        initialProductMap[product.idProduct] = {
          ...product,
          productQuantity: 1,
          totalPrice: product.unityPrice
        };
      }
    });
    return initialProductMap;
  });
  
  const handleDelete = (productId) => {
    setProductMap((prevProductMap) => {
      const updatedProductMap = { ...prevProductMap };
      delete updatedProductMap[productId];
      return updatedProductMap;
    });
    setCart(prevCart => prevCart.filter(product => product.idProduct !== productId));
  };

  return (
    <>
      {Object.values(productMap).map((product) => (
        <div className="data_container" key={product.idProduct}>
          <div className='cartContent'>
            <img src={`http://localhost:8080/api/imageProduct/${product.idProduct}`} className="card-img-top" alt="producto" />
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">{product.productDescription}</p>
              <h2 className="card-price">${product.totalPrice}</h2> {/* Mostrar el precio total del producto */}
              <div className="actions">
                <h5>Cantidad: {product.productQuantity}</h5>
                <button className="btn btn-danger" onClick={() => handleDelete(product.idProduct)}>Eliminar</button>
              <div className="actions">
              </div> 
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartElements;