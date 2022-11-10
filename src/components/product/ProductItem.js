import Image from "../ui/Image"
import Card from "../ui/Card"
import Counter from "./Counter"
import { useContext, useReducer } from 'react'
import { CartContext } from '../cart/CartContext'

const initialCount = {
    count: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return initialCount
        default:
            throw new Error()
    }
}

const ProductItem = ({ id, name, description, price = 0, image }) => {
    const [state, dispatch] = useReducer(reducer, initialCount)
    const cartContext = useContext(CartContext)

    function handleAddToCartClick() {
        const product = { id, name, description, price, image, amount:state.count }
        cartContext.add(product)
    }

    const increaseItemHandler = () => {
        dispatch({type:'increment'})
    }

    const decreaseItemHandler = () => {
        dispatch({type:'decrement'})
    }

    return (
        <Card>
            <figure className="image is-1by1">
                <Image imgSrc={image} altText={name} />
            </figure>
            <div className="columns is-mobile mt-3">
                <div className="column is-two-thirds">
                    <h5 className="title is-5">{name}</h5>
                </div>
                <div className="column has-text-right">
                    <h4 className="title is-4 has-text-primary-dark">{`${price}$`}</h4>
                </div>
            </div>

            <p className="subtitle is-6 mt-3">{description}</p>

            <div className="columns is-mobile">
                <div className="column is-two-thirds">
                    <Counter value={state.count} onMinusClick={decreaseItemHandler} onPlusClick={increaseItemHandler} />
                </div>
                <div className="column has-text-right">
                    <button onClick={handleAddToCartClick} className="button is-primary" aria-label="Add to Cart" title="Add to Cart">
                        <span className="icon is-small">
                            <i className="fa-solid fa-cart-plus" />
                        </span>
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default ProductItem