import React from 'react';
import "../assets/Style.css";
import Products from './../pages/Products';

const CartasInfo = () => {
  return (
    <div className="cartas-container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
              
            <div className="col">
              <div className="card">
              <img src="/src/image/arepaa.png" className="card-img-top" alt="producto" />
                <div className="card-body">
                    <h5 className="card-title">Combo ArepasRJ</h5>
                    <p className="card-text">Paquete x 5 unidades con media libra de cuajada.</p>
                    <h2 className="card-price">$16.000</h2>
                        <a href="/Products" className="btn btn-primary">Ver producto</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
              <img src="/src/image/arepaa.png" className="card-img-top" alt="producto" />
                <div className="card-body">
                    <h5 className="card-title">Paquete x5 unidades</h5>
                    <p className="card-text">Paquete por 5 unidades de arepas de chócolo.</p>
                    <h2 className="card-price">$8.000</h2>
                        <a href="/Products" className="btn btn-primary">Ver producto</a>
                </div>
           </div>
        </div>   
       


        <div className="col">
          <div className="card">
          <img src="/src/image/arepaa.png" className="card-img-top" alt="producto" />
            <div className="card-body">
                <h5 className="card-title">Paquete x8 unidades</h5>
                 <p className="card-text">Paquete por 8 unidades de arepas de chócolo.</p>
                 <h2 className="card-price">$14.000</h2>
                     <a href="/Products" className="btn btn-primary">Ver producto</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <img src="/src/image/arepaa.png" className="card-img-top" alt="producto" />
            <div className="card-body">
                <h5 className="card-title">Arepa de chócolo con cuajada</h5>
                 <p className="card-text">Arepa de chócolo preparada con mantequilla y dos porciones de cuajada.</p>
                 <h2 className="card-price">$11.000</h2>
                     <a href="/Products" className="btn btn-primary">Ver producto</a>
            </div>
          </div>
        </div>
        {/* Repite lo mismo para las otras cuatro cartas */}
        <div className="col">
          <div className="card">
          <img src="/src/image/arepaa.png" className="card-img-top" alt="producto" />
            <div className="card-body">
                <h5 className="card-title">Arepa de Queso</h5>
                 <p className="card-text">Arepa rellena de triple queso mozzarella con mantequilla y lecherita.</p>
                 <h2 className="card-price">$12.000</h2>
                     <a href="/Products" className="btn btn-primary">Ver producto</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <img src="/src/image/arepaa.png" className="card-img-top" alt="producto" />
            <div className="card-body">
                <h5 className="card-title">Tortas de Chócolo x5 unidades</h5>
                 <p className="card-text">Crocantes tortas de chócolo, paquete por 6 unidades.</p>
                 <h2 className="card-price">$8.000</h2>
                     <a href="/Products" className="btn btn-primary">Ver producto</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <img src="/src/image/arepaa.png" className="card-img-top" alt="producto" />
            <div className="card-body">
                <h5 className="card-title">Paquete x3 unidades de queso</h5>
                 <p className="card-text">Paquete por 3 unidades de arepas rellenas de triple queso.</p>
                 <h2 className="card-price">$5.000</h2>
                     <a href="/Products" className="btn btn-primary">Ver producto</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <img src="/src/image/arepaa.png" className="card-img-top" alt="producto" />
            <div className="card-body">
                <h5 className="card-title">Paquete x10 unidades de queso</h5>
                 <p className="card-text">Paquete por 10 arepas rellenas de queso doble crema.</p>
                 <h2 className="card-price">$15.000</h2>
                     <a href="/Products" className="btn btn-primary">Ver producto</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartasInfo;
