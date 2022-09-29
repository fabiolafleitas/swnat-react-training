import React from "react";
import donutMonsters from '../assets/images/donut-monsters.png';

const Hero = (props) => {
    return (
        <section className="hero">
            <div className="hero-body columns is-vcentered">
                <div className="column is-half-desktop">
                    <img src={donutMonsters} />
                </div>
                <div className="column">
                    <p className="title">Welcome</p>
                    <p className="subtitle">With some content</p>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Hero;

// 