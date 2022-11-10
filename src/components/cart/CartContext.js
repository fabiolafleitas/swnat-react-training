import { createContext, useReducer } from 'react'
import { cartReducer } from './reducer'

const CartContext = createContext({
    items: {},
    addItems: () => {}
  })

const intialState = {
  items: {}
}

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, intialState)

  const addItems = (item) => {
    dispatch({ type: 'cart/ADD', payload: item })
  }

  const value = {
    items: state.items,
    addItems,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
