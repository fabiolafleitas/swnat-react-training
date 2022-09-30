import React from "react";

const Header = (props) => {
    return (
        <header className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand container is-fluid is-max-widescreen">
                <h5 className="navbar-item">
                    <span className="icon-text is-size-5">
                        <span className="icon">
                            <i className="fas fa-utensils"></i>
                        </span>
                        <span>
                            React Vegan
                        </span>
                    </span>
                </h5>
            </div>
        </header>
    )
}

export default Header;