import React from "react";
import donutLogo from '../assets/images/donut-logo.svg';

const Header = (props) => {
    return (
        <header className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand container is-fullhd">
                <h5 className="navbar-item">
                    <span className="icon-text is-size-5">
                        <span className="icon">
                        <img src={donutLogo} alt="Donut"/>
                        </span>
                        <span>
                            Donut Monsters
                        </span>
                    </span>
                </h5>
            </div>
        </header>
    )
}

export default Header;