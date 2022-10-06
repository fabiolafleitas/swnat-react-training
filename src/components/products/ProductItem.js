
const ProductItem = ({ name, description, image }) => {
    return (
        <>
            <figure className="image is-1by1">
                <img style={{objectFit: "cover"}} src={image} alt={name} />
            </figure>
            <p className="title is-5">{name}</p>
            <p className="subtitle is-6">{description}</p>
        </>
    );
}

export default ProductItem;