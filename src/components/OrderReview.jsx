import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext'; 

const OrderReview = () => {
  
  const { cart } = useContext(cartContext);

  const subtotal = cart.reduce((acc,el)=> acc + el.unityPrice, 0);

 //HACER VARIABLE PARA PONER EL TOTAL. 
  
    return (
      <div className="order-review row g-3 pt-2 mt-5">
        <h4 className="pb-4">Revisión Pedido</h4>
        
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
        <div className="col-12 mb-4">
            <button type="submit" className="btn btn-primary">Ir a Pago</button>
        </div>
      </div>
      
    )
  }
  
  export default OrderReview;
  
