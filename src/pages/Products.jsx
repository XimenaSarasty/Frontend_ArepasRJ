import BannerWhatsapp from '../components/BannerWhatsapp';
import { Navbar } from '../components/Navbar';
import Footer from '../components/PiePag';
import CartasInfo from './../components/CartasInfo';

const Products = () => {
  return (
    <>
     {/* Se debe poner el navbar logueado */}
      <Navbar/>
      <CartasInfo/>
      <Footer/>
      <BannerWhatsapp/>
    </>
  )
}

export default Products
