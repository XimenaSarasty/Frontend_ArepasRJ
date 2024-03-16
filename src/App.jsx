import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx';
import { HomeLogin } from './pages/HomeLogin.jsx';
import Products from './pages/Products.jsx';
import ShoppingCart from './pages/ShoppingCart';
import ProfileUser from './pages/ProfileUser.jsx';
import ShoppingSummary from './pages/ShoppingSummary.jsx';
import AdmViewNewProd from './pages/AdmViewNewProd.jsx';
import AdmDomicilio from './pages/AdmDomicilio.jsx';
import { RegisterLogin } from "./pages/RegisterLogin..jsx";
import AdmOrder  from "./pages/AdmOrder.jsx";
import HomeAdmView from "./pages/HomeAdmView.jsx";
import UserHistory from "./pages/UserHistory.jsx";
import RolesAdmin from "./components/RolesAdmin.jsx";
import DataProvider from "./context/cartContext.jsx";
import EditProduct from "./components/EditProduct.jsx";

function App() {
  return (
    <>
        <DataProvider>
          <BrowserRouter>
          <Routes>  
                <Route path='/' element={<Home />} />
                <Route path='/home/login' element={<HomeLogin />} />
                <Route path='/login/register' element={<RegisterLogin />} />
                <Route path='/products' element={<Products />} />  
                <Route path='/shoppingcart' element={<ShoppingCart />} />
                <Route path='/admin/new-product' element={<AdmViewNewProd />} />
                <Route path='/admin/shipment-fee' element={<AdmDomicilio />} />
                <Route path='/user/profile' element={<ProfileUser/>} />
                <Route path='/shoppingsummary' element={<ShoppingSummary />} />        
                <Route path='/admin/adm-order' element={<AdmOrder />} />
                <Route path='/admin' element={<HomeAdmView />} />    
                <Route path="/user/user-history" element={<UserHistory />} />
                <Route path="/admin/roles" element={<RolesAdmin />} />
                <Route path="/admin/edit-prod" element={<EditProduct />} />                
            </Routes>
          </BrowserRouter>
        </DataProvider>
    </>
  ) 
}

export default App
