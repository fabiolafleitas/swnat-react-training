
const ProductItem = ({ name, description, price = 0, image }) => {
    return (
        <>
            <figure className="image is-1by1">
                <img style={{objectFit: "cover"}} src={image} alt={name} />
            </figure>
            <div class="columns is-mobile mt-3">
                <div class="column is-two-thirds">
                    <p className="title is-5">{name}</p>
                </div>
                <div class="column has-text-right">
                    <p className="title is-4 has-text-primary-dark">{`${price}$`}</p>
                </div>
            </div>

            <p className="subtitle is-6 mt-3">{description}</p>

            <div class="columns is-mobile">
                <div class="column is-two-thirds">
                    <div class="buttons">
                        <button class="button is-primary is-light mr-0 mb-0" aria-label="Minus">
                            <span class="icon is-small">
                                <i class="fa-solid fa-minus"></i>
                            </span>
                        </button>
                        <span className="mr-1 ml-1">0</span>
                        <button class="button is-primary is-light mb-0" aria-label="Plus">
                            <span class="icon is-small">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="column has-text-right">
                    <button class="button is-primary" aria-label="Add to Cart" title="Add to Cart">
                        <span class="icon is-small">
                            <i class="fa-solid fa-cart-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductItem;