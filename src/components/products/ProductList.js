import Card from "../ui/Card";
import CardGrid from "../ui/CardGrid";
import ProductItem from "./ProductItem";
import serverDown from "../../assets/images/server-down.svg";

const ProductList = ({products = []}) => {
    return (
        <div className="section">
            <h4 className="title is-4">Products</h4>
            {products.length ?
                <CardGrid>
                    {products.map(product => {
                        return (
                            <ProductItem {...product} key={product.id}/>
                        )
                    })}
                </CardGrid>
                :
                <div className="container is-centered has-text-centered	">
                    <img src={serverDown} alt="Server Down" style={{width: "300px"}}/>
                    <h5 className="title is-5 has-text-primary-dark">No products found</h5>
                </div>
            }
        </div>
    )
}

export default ProductList;