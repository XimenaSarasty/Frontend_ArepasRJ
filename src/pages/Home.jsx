import { Navbar } from "../components/Navbar"
import Carrusel from "../components/Carrusel"
import CartasInfo from './../components/CartasInfo';
import Footer from '../components/Footer'

import BannerWhatsapp from "../components/BannerWhatsapp";


export const Home = () => {
  return (
    <>
        <Navbar/>
        <Carrusel/>
        <CartasInfo/>
        <BannerWhatsapp/>
	      <Footer/>
    </>
  )
}
