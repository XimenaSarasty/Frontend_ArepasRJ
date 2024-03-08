import BannerWhatsapp from "../components/BannerWhatsapp";
import RequestInfo from "../components/RequestInfo";
import ShippingValue from "../components/ShippingValue";
import OrderReview from "../components/OrderReview";
import Footer from "../components/Footer";
import ShoppingCard from "../components/ShoppingCard";

// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
// import { useState } from 'react';
// import axios from 'axios';
import { CloseNav } from '../components/CloseNav';



const ShoppingSummary = () => {

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
    <> 
        <div className="container-ss">
           <CloseNav />
               
          <div className="left-side mt-5">
            <ShoppingCard/>
            <RequestInfo/>
          </div>
         
          <div className="right-side mt-5 mr-2">
            <ShippingValue/>
            <OrderReview/>
          </div>
          <BannerWhatsapp/> 
          {/* {preferenceId && <Wallet initialization={{ preferenceId: 'prefenrenceId' }} customization={{ texts:{ valueProp: 'smart_option'}}} />} */}
        </div>
        <Footer/>
    </>
  )
}

export default ShoppingSummary
