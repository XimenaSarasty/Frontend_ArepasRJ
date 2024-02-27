import { Navbar } from "../components/Navbar"
import Carrusel from "../components/Carrusel"
import CartasInfo from './../components/CartasInfo';
import PiePag from "../components/PiePag";


export const Home = () => {
  return (
    <>
        <Navbar/>
        <Carrusel/>
        <CartasInfo/>
	      <PiePag/>
    </>
  )
}
