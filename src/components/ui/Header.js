import { useContext, useState } from 'react'
import donutLogo from '../../assets/images/donut-logo.svg'
import { CartContext } from '../cart/CartContext'
import { getTotalItems } from '../cart/reducer'
import { Modal } from './Modal'
import { Cart } from '../cart/Cart'

const Header = () => {
  const { items } = useContext(CartContext)
  const [activeCart, setActiveCart] = useState(false)

  const totalItems = getTotalItems(items)

  const showModalHandler = () => {
    setActiveCart(true)
  }

  const closeModalHandler = () => {
    setActiveCart(false)
  }

  return (
    <>
      <header className="has-background-dark p-3 is-flex is-align-items-center is-justify-content-space-between">
        <h5 className="navbar-item">
          <span className="icon-text is-size-5">
            <span className="icon">
              <img src={donutLogo} alt="Donut" />
            </span>
            <span className="has-text-light">Donut Monsters</span>
          </span>
        </h5>
        <button
          className="button is-primary is-small"
          disabled={totalItems === 0}
          onClick={showModalHandler}
        >
          {totalItems}
        </button>
      </header>
      <Modal isOpen={activeCart} onClose={closeModalHandler}>
        <Cart />
      </Modal>
    </>
  )
}

export default Header
