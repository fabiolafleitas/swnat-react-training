import { render, screen } from '@testing-library/react'
import ProductItem from './ProductItem'

const productMock = {
  id: 1,
  name: 'Product 1',
  description: 'Topping danish pudding halvah soufflé marshmallow sweet.',
  price: 10,
  image:
    'https://images.immediate.co.uk/production/volatile/sites/30/2018/06/Vegan-salad-bowl-499145d.jpg?resize=960,872?quality=90&resize=556,505',
}

describe('product item', () => {
  it('renders title, description and price', () => {
    render(<ProductItem {...productMock}></ProductItem>)
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
      'Product 1'
    )
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(/10/)
    expect(
      screen.getByText(
        'Topping danish pudding halvah soufflé marshmallow sweet.'
      )
    ).toBeInTheDocument()
  })

  it('renders all the buttons', () => {
    render(<ProductItem {...productMock}></ProductItem>)
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<ProductItem {...productMock}></ProductItem>)
    expect(screen.getByAltText(/product 1/i)).toBeInTheDocument()
  })

  it('price falls to 0 when price is not provided', () => {
    const {price, rest} = productMock
    render(<ProductItem {...rest}></ProductItem>)
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(/0/)
  })
})
