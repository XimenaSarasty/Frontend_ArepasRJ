import Navbar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import CartasInfoSinLog from './../components/CartasInfoSinLog';
import BannerWhatsapp from "../components/BannerWhatsapp";

export const Home = () => {

  return (
    <>
        <Navbar/>
        <Carrusel/>
        <CartasInfoSinLog/>
        <BannerWhatsapp/>
	      <Footer/>
    </>
  )
}
