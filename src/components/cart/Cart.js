import { useContext } from 'react'
import { CartContext } from './CartContext'
import { getTotalPrice } from './reducer'
import { products } from '../product/mockData'
import { CartItem } from './CartItem'

export const Cart = () => {
  const { items } = useContext(CartContext)

  const total = getTotalPrice(items)

  const cartItems = Object.keys(items).map(id => {
    const productDetails = products.find(product => ''+product.id === id)
    return (
      <li key={id}>
        <CartItem details={productDetails} amount={items[id].amount} />
      </li>
    )
  })

  return (
    <>
      <ul>
        {cartItems}
      </ul>
      <div className="is-flex is-justify-content-flex-end is-align-items-center">
        <h2 className="subtitle is-6 mb-0 mr-2">Total</h2>
        <h5 className="title is-5 m-0">${total}</h5>
      </div>
    </>
  )
}