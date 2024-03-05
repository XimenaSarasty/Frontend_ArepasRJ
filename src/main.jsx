import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Access } from './components/Access.jsx';
import Products from './pages/Products.jsx';
import  AdmView  from './pages/AdmView.jsx'
import CarShop from './pages/CarShop.jsx';
import ProfileUser from './pages/ProfileUser.jsx';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/login/register' element={<Access />} />
          <Route path='/admin' element={<AdmView />} />
          <Route path='/products' element={<Products />} />
          <Route path='/carshop' element={<CarShop />} />
          <Route path='/user/profile' element={<ProfileUser/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
