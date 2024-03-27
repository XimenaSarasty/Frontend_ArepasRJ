import React, { useContext, useState } from 'react';
import { cartContext } from '../context/cartContext'; 
import { shoppingContext } from '../context/shoppingContext';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { userContext } from './../context/userContext';
import axios from "axios";

const OrderReview = () => {

  const [preferenceId, setPreferenceId] = useState(null);
  const {
    selectedDepartment,
    selectedCity,
    selectedMunicipality,
  } = useContext(shoppingContext);

  initMercadoPago('TEST-d1b8fb7a-e59b-458f-aa29-ef5d9a99c5ad', {locale: "es-CO"});

  const { cart } = useContext(cartContext);
  const { shippingPrice } = useContext(shoppingContext);
  const { user } = useContext(userContext); 

  const subtotal = cart.reduce((acc, el) => acc + el.unityPrice, 0);
  const total = subtotal + shippingPrice;

  // const createPreference = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:8080/", { //URL QUE DEBE PASAR PUYOL
  //       // title: "Bananita contenta", 
  //       // quantity:1,
  //       // price:100,
  //     });
      
  //     const { id } = response.data;
  //     return id;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleBuy = async () => {
    // const id = await createPreference();
    // if (id) {
    //   setPreferenceId(id);
    // }

    const infoBuy = {
      date: Date.now(),
      name: user.name,
      lastName: user.lastName,
      products: cart.map( product => {
        return {
          productName: product.productName,
          quantity: product.quantity,
          price: product.unityPrice
        }
      }),    
      totalPayment: total,
      department: selectedDepartment,
      city: selectedCity,
      commune: selectedMunicipality ? selectedMunicipality:selectedCity,
      address: user.address,
      orderStatus: "En gestión"
    }
    console.log(infoBuy);

    const apiUrl = 'http://localhost:8080/api/buy';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(infoBuy), 
    })
      .then(response => {
        
        if (response.ok) {
          console.log('La compra fue realizada con éxito');
        } else {
          console.error('Hubo un problema al realizar la compra');
        }
      })
      .catch(error => {
          console.error('Error de red:', error);
      });
  };

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
          <button type="submit" className="btn btn-primary" onClick={handleBuy}>Ir a Pago</button>
          {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
      </div>
    </div>
  );
};

export default OrderReview;
