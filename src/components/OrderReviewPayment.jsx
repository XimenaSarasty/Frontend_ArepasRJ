  import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext'; 

const OrderReviewPayment = () => {
  
  const { cart } = useContext(cartContext);

  const subtotal = cart.reduce((acc,el)=> acc + el.unityPrice, 0);

    return (
      <div className="order-review row g-3 pt-2 mt-5">
        <h4 className="pb-4">Resumen Compra</h4>
        
        <div className="review-item">
          <p>SUBTOTAL</p> 
          <h6 className="bold">${subtotal}</h6>
        </div>
  
        <div className="review-item">
          <p>ENVÍO</p> 
          <h6 className="bold">$0</h6>
        </div>
  
        <div className="review-item">
          <h5 className="bold">TOTAL</h5>
          <h5 className="bold">$0</h5>
        </div>
      </div>
      
    )
  }
  
  export default OrderReviewPayment;

