import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx';
import { Access } from './components/Access.jsx';
import Products from './pages/Products.jsx';
import  AdmView  from './pages/AdmView.jsx'
import ShoppingSummary from './pages/ShoppingSummary.jsx';
import PaymentGateway from './pages/PaymentGateway.jsx';
import "./index.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>  
            <Route path='/' element={<Home />} />
            <Route path='/login/register' element={<Access />} />
            <Route path='/products' element={<Products />} />
            <Route path='/admin' element={<AdmView />} />
            <Route path='/shoppingsummary' element={<ShoppingSummary />} />
            <Route path='/paymentgateway' element={<PaymentGateway />} />
        </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App


