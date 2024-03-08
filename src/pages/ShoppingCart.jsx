import { CloseNav } from "../components/CloseNav"
import { useId } from 'react'
// import { CartIcon, ClearCartIcon } from './Icons.jsx'
// import { useCart } from '../hooks/useCart.js'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        
      />
      <div>
        <strong>Combo ArepasRJ</strong> - $16.000
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

const ShoppingCart = () => {

  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <div>
      <CloseNav />
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        {/* <ul>
            {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product} 
            />
          ))}
        </ul>  */}

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  );
};

export default ShoppingCart;
