
const RequestInfo = () => {
  return (
    <>
        <div className="data_container">
            <h4>Información del envío</h4>
                <form className="row g-3 pt-2">
                <div className="col-md-6">
                    <label htmlFor="inputNames4" className="form-label htmlFor"></label>
                    <input type="name" className="form-control" id="inputNames4" placeholder="Nombre"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastName4" className="form-label htmlFor"></label>
                    <input type="name" className="form-control" id="inputLastName4" placeholder="Apellidos"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputIndicative" className="form-label htmlFor"></label>
                    <input type="number" className="form-control" id="inputIndicative" placeholder="+57"/>
                </div>

                <div className="col-md-8" >                
                    <label htmlFor="inputPhone" className="form-label htmlFor"></label>
                    <input type="number" className="form-control" id="inputPhone" placeholder="Teléfono"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label htmlFor"></label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Dirección"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label htmlFor"></label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Agregar instrucciones específicas (opcional)"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputDepartament" className="form-label htmlFor"></label>
                    <input type="text" className="form-control" id="inputDepartament" placeholder="Departamento"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label htmlFor"></label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Ciudad"/>
                </div>
                <div className="col-md-4 mb-4">
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
    
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Guardar Datos</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default RequestInfo
