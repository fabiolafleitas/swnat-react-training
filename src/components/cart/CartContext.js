import { createContext, useReducer } from 'react'
import { cartReducer } from './reducer'

const CartContext = createContext({
    items: {},
    addItems: () => {},
    removeItems: () => {},
    deleteItem: () => {},
    reset: () => {},
    finish: () => {},
    checkPlacement: () => {}
  })

const intialState = {
  items: {},
  orderPlaced: false
}

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, intialState)

  const addItems = (item) => {
    dispatch({ type: 'cart/ADD', payload: item })
  }

  const removeItems = (item) => {
    dispatch({ type: 'cart/REMOVE', payload: item })
  }

  const deleteItem = (id) => {
    dispatch({ type: 'cart/DELETE', payload: id })
  }

  const reset = () => {
    dispatch({ type: 'cart/RESET' })
  }

  const finish = () => {
    dispatch({ type: 'cart/FINISH' })
  }

  const checkPlacement = () => {
    dispatch({ type: 'cart/CHECK_PLACEMENT' })
  }

  const value = {
    items: state.items,
    orderPlaced: state.orderPlaced,
    addItems,
    removeItems,
    deleteItem,
    reset,
    finish,
    checkPlacement
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
