import Image from "../ui/Image"
import Card from "../ui/Card"
import Counter from "./Counter"
import { useContext, useRef } from 'react'
import { CartContext } from '../cart/CartContext'

const ProductItem = ({ id, name, description, price = 0, image }) => {
    let amount = 0
    const cartContext = useContext(CartContext)
    const countRef = useRef()
    let product = { id, name, description, price, image, amount }

    function handleAddToCartClick() {
        cartContext.add(product)
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
                    <Counter initialCount={amount} />
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