import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx';
import { Access } from './components/Access.jsx';
import DataProvider from "./context/cartContext.jsx";
import Products from './pages/Products.jsx';
import ShoppingCart from './pages/ShoppingCart';
import ProfileUser from './pages/ProfileUser.jsx';
import ShoppingSummary from './pages/ShoppingSummary.jsx';
import AdmViewNewProd from './pages/AdmViewNewProd.jsx';
import AdmDomicilio from './pages/AdmDomicilio.jsx';

function App() {
  return (
    <>
      <DataProvider/> 
        <BrowserRouter>
          <Routes>  
              <Route path='/' element={<Home />} />
              <Route path='/login/register' element={<Access />} />
              <Route path='/products' element={<Products />} />  
              <Route path='/shoppingcart' element={<ShoppingCart />} />
              <Route path='/admin/new-product' element={<AdmViewNewProd />} />
              <Route path='/admin/shipment-fee' element={<AdmDomicilio />} />
              <Route path='/user/profile' element={<ProfileUser/>} />
              <Route path='/shoppingsummary' element={<ShoppingSummary />} />            
          </Routes>
        </BrowserRouter>
      <DataProvider/> 
    </>
  ) 
}

export default App


