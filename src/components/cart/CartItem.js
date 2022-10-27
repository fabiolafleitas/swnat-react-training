import { CartContext } from './cartContext-latest'
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
  const { addItems } = useContext(CartContext)


  const subTotal = details.price * amount

  const addItemHandler = () => {
    const itemToAdd = {
        id: details.id,
        amount: 1
    }
    addItems(itemToAdd)
  }

  return (
    <>
      <article className="is-flex is-justify-content-space-between is-align-items-center">
        {/* <figure className="shadow">
          <img
            width={64}
            height={64}
            src={details.image}
            alt={details.name}
          />
        </figure> */}
        <div style={productImageCss(details.image)}></div>
        
        <span style={productNameCss}>{details.name}</span>

        <div className="buttons m-0">
          <button
            className="button is-primary is-light mr-0 mb-0"
            aria-label="Minus"
            disabled={!amount}
            onClick={() => {}}
          >
            <span className="icon is-small">
              <i className="fa-solid fa-minus" />
            </span>
          </button>
          <span className="mr-1 ml-1">{amount}</span>
          <button
            className="button is-primary is-light mb-0"
            aria-label="Plus"
            onClick={addItemHandler}
          >
            <span className="icon is-small">
              <i className="fa-solid fa-plus" />
            </span>
          </button>
        </div>

        <h4>${subTotal}</h4>
        <button class="button is-primary is-inverted">
          <span className="icon is-small">
            <i className="fa-solid fa-xmark" />
          </span>
        </button>
      </article>
      <hr />
    </>
  )
}
