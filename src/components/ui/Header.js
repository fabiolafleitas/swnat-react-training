import React from 'react'
import donutLogo from '../../assets/images/donut-logo.svg'

const Header = (props) => {
  return (
    <header className="has-background-dark p-3 is-flex is-align-items-center is-justify-content-space-between">
      <h5 className="navbar-item">
        <span className="icon-text is-size-5">
          <span className="icon">
            <img src={donutLogo} alt="Donut" />
          </span>
          <span className="has-text-light">Donut Monsters</span>
        </span>
      </h5>
      <span className="tag is-primary">0</span>
    </header>
  )
}

export default Header
