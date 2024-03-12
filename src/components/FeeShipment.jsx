import React, { useState } from 'react';
import "../assets/Style.css";

const FeeShipment = () => {
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedComuna, setSelectedComuna] = useState('');
  const [price, setPrice] = useState('');

  const handleMunicipalityChange = (event) => {
    setSelectedMunicipality(event.target.value);
  };

  const handleComunaChange = (event) => {
    setSelectedComuna(event.target.value);
  };

  const handlePriceChange = (event) => {
    // Permite ingresar solo números
    const inputValue = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (inputValue === '' || regex.test(inputValue)) {
      setPrice(inputValue);
    }
  };

  const handleSave = () => {
    // Aquí puedes realizar la lógica para guardar la información
    // Por ahora, simplemente imprimo los valores en la consola
    console.log("Municipio seleccionado:", selectedMunicipality);
    console.log("Comuna seleccionada:", selectedComuna);
    console.log("Precio:", price);
  };

  return (
    <div className="allin">
      <h4 className='nombenvio'>Agregar Nuevo Costo de Envio</h4>
      <div className="col-md-3 mb-4"> 
        <label htmlFor="municipalitySelect" className="form-label htmlFor"></label>
        <select 
          value={selectedMunicipality}
          onChange={handleMunicipalityChange}
          id="municipalitySelect" 
          className="custom-select"
        > 
          <option disabled value="">Seleccionar Municipio</option>
          <option>Barbosa</option>
          <option>Copacabana</option>
          <option>Girardota</option>
          <option>Bello</option>
          <option>Medellin</option>
          <option>Envigado</option>
          <option>Itagüí</option>
          <option>Sabaneta</option>
          <option>La Estrella</option>
          <option>Caldas</option>
        </select>
      </div>

      <div className={`col-md-5 mb-4 ${selectedMunicipality === 'Medellin' ? '' : 'hidden'}`}>
        <label htmlFor="communeSelect" className="form-label htmlFor"></label>
        <select 
          value={selectedComuna}
          onChange={handleComunaChange}
          id="communeSelect" 
          className="custom-select"
        >
          <option disabled value="">Seleccionar Comuna</option>
          <option>Nororiental (Popular, Santa Cruz, Manrique,Aranjuez)</option>
          <option>Noroccidental (Castilla, Doce Octubre, Robledo)</option>
          <option>Centro Oriental (Villa Hermosa, Buenos Aires, La Candelaria)</option>
          <option>Centro Occidental (Laureles-Estadio, La América, San Javier)</option>
          <option>Suroriental (Poblado)</option>
          <option>Suroccidental (Guayabal, Belén)</option>
          <option>Corregimientos (Palmitas, San Cristobal, Altavista, San Antonio, Santa Elena)</option>
        </select>
      </div>

      <div className="col-md-3 mb-4">
        <label htmlFor="priceInput" className="form-label"></label>
        <input 
          type="text"
          value={price}
          onChange={handlePriceChange}
          id="priceInput"
          className="custom-select form-control"
          placeholder="Ingrese el precio del domicilio"
        />
      </div>
      <div className="domibt col-md-12 mb-4">
        <button onClick={handleSave} className="my-3 btn btn-primary" style={{ marginLeft: '3rem' }}> Guardar</button>
      </div>
    </div>
  );
};

export default FeeShipment;
