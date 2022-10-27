import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('header', () => {
  it('renders correctly', () => {
    render(<Header />)
    expect(screen.getByRole('img', { name: /donut/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
      'Donut Monsters'
    )
  })
})
