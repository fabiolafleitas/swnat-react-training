import { useContext, useEffect, useState } from 'react'
import donutLogo from '../../assets/images/donut-logo.svg'
import { CartContext } from '../cart/CartContext'
import { getTotalItems } from '../cart/reducer'
import { Modal } from './Modal'
import { Cart } from '../cart/Cart'

const Header = () => {
  const { items, checkPlacement } = useContext(CartContext)
  const [activeCart, setActiveCart] = useState(false)
  const [animation, setAnimation] = useState(false)

  const totalItems = getTotalItems(items)

  const showModalHandler = () => {
    setActiveCart(true)
  }

  const closeModalHandler = () => {
    setActiveCart(false)
    checkPlacement()
  }

  useEffect(()=>{
    setAnimation(true);
    setTimeout(()=>{
        setAnimation(false);
    }, 400)
  },[totalItems]);

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
        <div className={animation && totalItems > 0 ? "cart-animation" : ""}>
            <button
            className="button is-primary is-small"
            disabled={totalItems === 0}
            onClick={showModalHandler}
            >
            <span class="icon is-small"><i class="fa-solid fa-cart-plus"></i></span>
            <span>{totalItems}</span>
            </button>
        </div>
      </header>
      <Modal isOpen={activeCart} onClose={closeModalHandler}>
        <Cart onClose={closeModalHandler} />
      </Modal>
    </>
  )
}

export default Header
