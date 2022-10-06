import Card from "../ui/Card";
import CardGrid from "../ui/CardGrid";
import ProductItem from "./ProductItem";

const products = [
    {
        id: 1,
        name: "Product 1",
        description: "Topping danish pudding halvah soufflé marshmallow sweet.",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2018/06/Vegan-salad-bowl-499145d.jpg?resize=960,872?quality=90&resize=556,505"
    },
    {
        id: 1,
        name: "Product 2",
        description: "Chocolate bar sweet roll pudding macaroon carrot cake bear claw pastry cake croissant.",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vegan-kebabs-3322e41.jpg"
    },
    {
        id: 1,
        name: "Product 3",
        description: "Jelly beans marshmallow soufflé shortbread cookie cookie macaroon dragée.",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegancheesecake2-1590604376.jpg?crop=1.00xw:0.668xh;0,0.193xh&resize=640:*"
    },
    {
        id: 1,
        name: "Product 4",
        description: "Toffee candy shortbread muffin candy canes tart.",
        image: "http://laurencariscooks.com/1_lcc/wp-content/uploads/2016/08/Vegan-Chocolate-Ganache-Torte-6.jpg"
    },
    {
        id: 1,
        name: "Product 4",
        description: "Toffee candy shortbread muffin candy canes tart.",
        image: "https://cookieandkate.com/images/2017/06/best-vegan-mac-and-cheese-recipe.jpg"
    },
    {
        id: 1,
        name: "Product 4",
        description: "Toffee candy shortbread muffin candy canes tart.",
        image: "https://img.taste.com.au/JyNOJGVa/taste/2020/02/vegan-creamy-sun-dried-tomato-and-spinach-gnocchi-158620-1.jpg"
    },
    {
        id: 1,
        name: "Product 4",
        description: "Toffee candy shortbread muffin candy canes tart.",
        image: "https://www.greenshop.dk/wp-content/uploads/2019/03/vegan-bloggers-01-722x406-1.jpg"

    }
]


const ProductList = () => {
    return (
        <div className="section">
            <h4 className="title is-4">Products</h4>
            <CardGrid>
                {products.map(product => {
                    return (
                        <Card>
                            <ProductItem name={product.name} description={product.description} image={product.image} />
                        </Card>
                    )
                })}
            </CardGrid>
        </div>
    )
}

export default ProductList;