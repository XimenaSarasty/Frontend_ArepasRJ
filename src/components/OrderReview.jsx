import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext'; 
import { NavLink } from 'react-router-dom';
import { shoppingContext } from '../context/shoppingContext';

const OrderReview = () => {
  
  const { cart } = useContext(cartContext);
  const { shippingPrice } = useContext(shoppingContext);

  const subtotal = cart.reduce((acc, el) => acc + el.unityPrice, 0);
  const total = subtotal + shippingPrice;

  return (
    <div className="order-review row g-3 pt-2 mt-5">
      <h4 className="pb-4">Resumen Compra</h4>
      
      <div className="review-item">
        <p>SUBTOTAL</p> 
        <h6 className="bold">${subtotal}</h6>
      </div>

      <div className="review-item">
        <p>ENVÍO</p> 
        <h6 className="bold">${shippingPrice}</h6> 
      </div>

      <div className="review-item">
        <h5 className="bold">TOTAL</h5>
        <h5 className="bold">${total}</h5>
      </div>
      <div className="col-12 mb-4">
        <NavLink to={'/user/payment/gateway'}>
          <button type="submit" className="btn btn-primary">Ir a Pago</button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderReview;
