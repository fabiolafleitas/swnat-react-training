import Counter from '../product/Counter'
import { CartContext } from './CartContext'
import { useContext } from 'react'

const productNameCss = {
  width: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

const productImageCss = (url) => {
  return {
    width: '64px',
    height: '64px',
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
}

export const CartItem = ({ details, amount }) => {
  const { addItems, removeItems, deleteItem } = useContext(CartContext)


  const subTotal = details.price * amount

  const addItemHandler = () => {
    const itemToAdd = {
        id: details.id,
        amount: 1
    }
    addItems(itemToAdd)
  }
  const removeItemHandler = () => {
    const itemToRemove = {
      id: details.id,
      amount: 1
    }
    removeItems(itemToRemove)
  }

  const deleteItemHandler = () => {
    deleteItem(details.id)
  }

  return (
    <>
      <article className="is-flex is-justify-content-space-between is-align-items-center">
        <div style={productImageCss(details.image)}></div>
        
        <span style={productNameCss}>{details.name}</span>

        <div className='mb-0'>
          <Counter value={amount} onMinusClick={removeItemHandler} onPlusClick={addItemHandler} />
        </div>

        <h4>${subTotal}</h4>
        <button className="button is-primary is-inverted"
          onClick={deleteItemHandler}>
          <span className="icon is-small">
            <i className="fa-solid fa-xmark" />
          </span>
        </button>
      </article>
      <hr />
    </>
  )
}
