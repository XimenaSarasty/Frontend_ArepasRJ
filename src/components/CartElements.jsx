import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext';

const CartElements = () => {

        const { cart } = useContext(cartContext);
      
        if (cart.length === 0) {
          return <p>El carrito está vacío.</p>;
        }
      
        return cart.map((product) => {

        return (
            <div className="data_container">
                <div className='cartContent' key={product.idProduct}>
                    <img src={`http://localhost:8080/api/imageProduct/${product.idProduct}`} className="card-img-top" alt="producto" />
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text">{product.productDescription}</p>
                            <h2 className="card-price">${product.unityPrice}</h2>
                    </div>
                </div> 
            </div>
        )                 
    })
};

export default CartElements

