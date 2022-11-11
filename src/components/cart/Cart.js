import { useContext } from 'react'
import { CartContext } from './CartContext'
import { getTotalPrice } from './reducer'
import { products } from '../product/mockData'
import { CartItem } from './CartItem'
import happyMusic from '../../assets/images/happy-music.svg'
import refreshingBeverage from '../../assets/images/refreshing-beverage.svg'

export const Cart = ({ onClose }) => {
  const { items, orderPlaced, reset, finish } = useContext(CartContext)

  console.log(orderPlaced)

  const total = getTotalPrice(items)

  const cartItems = Object.keys(items).map(id => {
    const productDetails = products.find(product => ''+product.id === id)
    return (
      <li key={id}>
        <CartItem details={productDetails} amount={items[id].amount} />
      </li>
    )
  })

  const handleReset = () => {
    reset()
  }

  const orderPlacedHandler = () => {
    onClose()
    finish()
  }

  if(orderPlaced) {
    return (
      <div className='is-flex is-flex-direction-column is-align-items-center'>
        <figure className="image" style={{width:'30%'}}>
          <img src={refreshingBeverage} alt="Refreshing Beverage"></img>
        </figure>
        <p className='is-size-4 has-text-centered mt-5'>Your order was placed successfully!</p>
        <p className='is-size-6 has-text-centered mt-5'>Take a breath until your order arrives!</p>
        <button
          className="button is-primary is-medium mt-5"
          onClick={orderPlacedHandler}
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  if(cartItems.length === 0) {
    return (
      <div className='is-flex is-flex-direction-column is-align-items-center'>
        <figure className="image" style={{width:'50%'}}>
          <img src={happyMusic} alt="Happy Music Bird"></img>
        </figure>
        <p className='is-size-4 has-text-centered mt-5'>There is no item here</p>
        <button
          className="button is-primary is-medium mt-5"
          onClick={onClose}
        >
          Shop Now
        </button>
      </div>
    )
  }

  return (
    <>
      <ul>
        {cartItems}
      </ul>
      <div className="is-flex is-justify-content-flex-end is-align-items-center">
        <h2 className="subtitle is-6 mb-0 mr-2">Total</h2>
        <h5 className="title is-5 m-0">${total}</h5>
      </div>
      <div className="is-flex is-justify-content-center is-align-items-center">
        <button
            className="button is-primary mt-5"
            onClick={handleReset}
          >
            <span className="icon is-small">
              <i className="fa-solid fa-cart-shopping" />
            </span>
            <span>Order</span>
        </button>
      </div>
    </>
  )
}