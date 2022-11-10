import { products } from '../product/mockData'

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'cart/ADD': {
      const { id, amount } = action.payload
      return {
        items: {
          ...state.items,
          [id]: {
            amount: state.items[id] ? state.items[id].amount + amount : amount,
          },
        },
      }
    }
    // TODO: Remove and Clear actions
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
