
const ProductItem = ({name, description}) => {
    return (
        <div className="tile is-parent column is-one-third">
            <article className="tile is-child box">
                <p className="title is-5">{name}</p>
                <p className="subtitle is-6">{description}</p>
            </article>
        </div>
    );
}

export default ProductItem;