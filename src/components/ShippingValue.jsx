
const ShippingValue = () => {
  return (
    <div className="shipping-value">
      <h4 className="p-2">Costo de envío</h4>
                <div className="col-md-12 p-2">
                    <label htmlFor="inputDepartament" className="form-label htmlFor"></label>
                    <input type="text" className="form-control" id="inputDepartament" placeholder="Departamento"/>
                </div>
                <div className="col-md-12 p-2">
                    <label htmlFor="inputCity" className="form-label htmlFor"></label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Ciudad"/>
                </div>
                <div className="col-md-12 mb-4 p-2">
                    <label htmlFor="inputState" className="form-label htmlFor"></label>
                    <select defaultValue="Nororiental (Popular, Santa Cruz, Manrique,Aranjuez)" id="inputState" className="form-select">
                        <option>Nororiental (Popular, Santa Cruz, Manrique,Aranjuez)</option>
                        <option>Noroccidental (Castilla, Doce Octubre, Robledo)</option>
                        <option>Centro Oriental (Villa Hermosa, Buenos Aires, La Candelaria)</option>
                        <option>Centro Occidental (Laureles-Estadio, La América, San Javier)</option>
                        <option>Suroriental (Poblado)</option>
                        <option>Suroccidental (Guayabal, Belén)</option>
                        <option>Corregimientos (Palmitas, San Cristobal, Altavista, San Antonio, Santa Elena)</option>
                    </select>
                </div>
                <div className="other-departaments p-2">
                    <p>Si tu envio es fuera del Valle de Aburrá, consultar vía whatsapp el precio del envio.</p>
                </div>
                <div className="col-12 mb-4 p-2">
                    <button type="submit" className="btn btn-primary">Calcular envío</button>
                </div>
    </div>
  )
}

export default ShippingValue
