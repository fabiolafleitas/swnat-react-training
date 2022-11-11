import { products } from '../product/mockData'

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'cart/ADD': {
      const { id, amount } = action.payload
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            amount: state.items[id] ? state.items[id].amount + amount : amount,
          },
        },
      }
    }
    case 'cart/REMOVE': {
      const { id, amount } = action.payload
      const itemAmount = state.items[id].amount

      if (itemAmount > 1) {
        return {
          ...state,
          items: {
            ...state.items,
            [id]: {
              amount: state.items[id].amount - amount,
            },
          }
        }
      }

      const newItems = {
        ...state.items
      }
      delete newItems[id]
      return {
        ...state,
        items: {
          ...newItems
        }
      }
    }
    case 'cart/DELETE': {
      const id = action.payload
      const newItems = {
        ...state.items
      }
      delete newItems[id]

      return {
        ...state,
        items: {
          ...newItems
        }
      }
    }
    case 'cart/RESET': {
      return {
        items: {},
        orderPlaced: true
      }
    }
    case 'cart/FINISH': {
      return {
        items: {},
        orderPlaced: false
      }
    }
    case 'cart/CHECK_PLACEMENT': {
      return {
        ...state,
        orderPlaced: false
      }
    }
    default:
      return state
  }
}

const getTotalItems = (stateItems) => {
  return Object.keys(stateItems).reduce((prev, id) => {
    return stateItems[id].amount + prev
  }, 0)
}

const getTotalPrice = (stateItems) => {
  return Object.keys(stateItems).reduce((prev, id) => {
    const productDetails = products.find(product => ''+product.id === id)
    return (stateItems[id].amount * productDetails.price) + prev
  }, 0)
}

export {
  cartReducer,
  getTotalItems,
  getTotalPrice
}
