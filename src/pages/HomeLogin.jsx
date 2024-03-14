import Carrusel from "../components/Carrusel"
import CartasInfo from '../components/CartasInfo';
import Footer from '../components/Footer'
import BannerWhatsapp from "../components/BannerWhatsapp";
import { CloseNav } from "../components/CloseNav";


export const HomeLogin = () => {
  return (
    <>
        <CloseNav/>
        <Carrusel/>
        <CartasInfo/>
        <BannerWhatsapp/>
	    <Footer/>
    </>
  )
}
