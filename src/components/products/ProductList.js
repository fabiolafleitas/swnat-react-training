import ProductItem from "./ProductItem";

const products = [
    {
        id: 1,
        name: "Product 1",
        description: "Topping danish pudding halvah soufflé marshmallow sweet."
    },
    {
        id: 1,
        name: "Product 2",
        description: "Chocolate bar sweet roll pudding macaroon carrot cake bear claw pastry cake croissant."
    },
    {
        id: 1,
        name: "Product 3",
        description: "Jelly beans marshmallow soufflé shortbread cookie cookie macaroon dragée."
    },
    {
        id: 1,
        name: "Product 4",
        description: "Toffee candy shortbread muffin candy canes tart."
    },
    {
        id: 1,
        name: "Product 4",
        description: "Toffee candy shortbread muffin candy canes tart."
    },
    {
        id: 1,
        name: "Product 4",
        description: "Toffee candy shortbread muffin candy canes tart."
    },
    {
        id: 1,
        name: "Product 4",
        description: "Toffee candy shortbread muffin candy canes tart."
    }
]


const ProductList = () => {
    return (
        <>
        <h4 className="title is-4">Products</h4>
        <div className="tile is-ancestor columns is-multiline">
            {products.map(product => {
                return (
                    <ProductItem name={product.name} description={product.description} />
                )
            })}
        </div>
        </>
    )
}

export default ProductList;