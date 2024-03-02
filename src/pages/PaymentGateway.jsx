import BannerWhatsapp from './../components/BannerWhatsapp';
import { Navbar } from './../components/Navbar';
import Footer from '../components/PiePag';
// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
// import { useState } from 'react';
// import axios from 'axios';

const PaymentGateway = () => {
  // const [preferenceId, setPreferenceId] = useState(null)
//   initMercadoPago('TEST-f35b035a-f944-42d1-89e3-8aaae7570932', {
//     locale: "es-CO",
// });

// Esto es el código del Backend que tendríamos que hacer en Java con Springboot
// const createPreference = async () => {
//   try {
//     const response = await axios.post("https://localhost:3000/create_preference", {
//       title: "Arepa queso",
//       quantity: 1,
//       price: 2000,
//     });

//     const { id } = response.data; 
//     return id;  
//   } catch (error) {
//     console.log(error);
//   }
// };

  // const handleBuy = async () => {
  //   const id = await createPreference();
  //   if (id) {
  //     setPreferenceId(id);
  //   }
  // };

  return (
    <div>
       {/* Se debe poner el navbar logueado */}
      <Navbar/> 
      <BannerWhatsapp/>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <botton>Proceder al pago</botton>
      {/* {preferenceId && <Wallet initialization={{ preferenceId: 'prefenrenceId' }} customization={{ texts:{ valueProp: 'smart_option'}}} />} */}
      <Footer/>
    </div>
  )
}

export default PaymentGateway
