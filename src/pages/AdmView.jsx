import React from 'react';
import NavAdm from '../components/NavAdm';
import AgProducto from '../components/AgProducto';
import BannerWhatsapp from '../components/BannerWhatsapp';
import Footer from '../components/Footer';

const AdmView = () => {
  return (
    <div>
      <NavAdm/>
      <AgProducto/>
      <BannerWhatsapp/>
      <Footer/>
    </div>
  );
}

export default AdmView; 
