import { render, screen } from "@testing-library/react"
import ProductList from "./ProductList";

const productListMock = [
    {
        id: 1,
        name: "Product 1",
        description: "Topping danish pudding halvah soufflé marshmallow sweet.",
        price: 10,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2018/06/Vegan-salad-bowl-499145d.jpg?resize=960,872?quality=90&resize=556,505"
    },
    {
        id: 2,
        name: "Product 2",
        description: "Chocolate bar sweet roll pudding macaroon carrot cake bear claw pastry cake croissant.",
        price: 20,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vegan-kebabs-3322e41.jpg"
    }
];

describe('product list', () => {
    it('renders correctly the product cards', () => {
        render(<ProductList products={productListMock} />);
        expect(screen.getAllByRole("article")).toHaveLength(2);
    })

    it('renders an error message if the product list is empty', () => {
        render(<ProductList/>);
        expect(screen.getByText("No products found")).toBeInTheDocument();
    })
})