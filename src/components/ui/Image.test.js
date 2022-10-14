import { render, screen, fireEvent } from '@testing-library/react'
import Image from './Image'

describe('Image', () => {
  it('shows correctly the provided image', () => {
    render(<Image altText="Logo 512" imgSrc="logo512.png" />)
    expect(screen.getByAltText(/logo 512/i)).toBeInTheDocument()
  })

  it('shows default image when the source is not provided', () => {
    render(<Image altText="Logo 512" imgSrc="" />)
    const fallBackImg = screen.getByAltText(/donut monster taken/i)
    fireEvent.load(fallBackImg)
    expect(fallBackImg).toBeInTheDocument()
  })

  it('shows default image when the source url does not exist', () => {
    render(<Image altText="Logo 512" imgSrc="urlThatDoesNotExist" />)
    fireEvent.error(screen.getByAltText(/logo 512/i))
    expect(screen.getByAltText(/donut monster taken/i)).toBeInTheDocument()
  })
})
