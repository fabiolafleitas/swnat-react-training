import Image from "../ui/Image";

const ProductItem = ({ name, description, price = 0, image }) => {
    return (
        <>
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
                    <div className="buttons">
                        <button className="button is-primary is-light mr-0 mb-0" aria-label="Minus">
                            <span className="icon is-small">
                                <i className="fa-solid fa-minus"></i>
                            </span>
                        </button>
                        <span className="mr-1 ml-1">0</span>
                        <button className="button is-primary is-light mb-0" aria-label="Plus">
                            <span className="icon is-small">
                                <i className="fa-solid fa-plus"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="column has-text-right">
                    <button className="button is-primary" aria-label="Add to Cart" title="Add to Cart">
                        <span className="icon is-small">
                            <i className="fa-solid fa-cart-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductItem;