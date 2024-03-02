const OrderReview = () => {
    return (
      <div className="order-review row g-3 pt-2">
        <h4 className="pb-4">Revisión Pedido</h4>
        
        <div className="review-item">
          <p>SUBTOTAL</p> 
          <h6 className="bold">$69.000</h6>
        </div>
  
        <div className="review-item">
          <p>ENVÍO</p> 
          <h6 className="bold">$10.000</h6>
        </div>
  
        <div className="review-item">
          <h5 className="bold">TOTAL</h5>
          <h5 className="bold">$79.000</h5>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Ir a Pago</button>
        </div>
      </div>
      
    )
  }
  
  export default OrderReview;
  
