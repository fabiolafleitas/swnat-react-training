import React from "react";
import donutMonsters from '../assets/images/donut-monsters.svg';

const Hero = (props) => {
    return (
        <section className="hero hero-light-background">
            <div className="hero-body columns is-vcentered">
                <div className="column">
                    <h1 className="title is-1">Welcome</h1>
                    <p className="subtitle">to Donut Monsters vegan food</p>
                    <div className="content">
                        <p>Danish tart chocolate caramels sweet. Halvah candy tart tiramisu chupa chups.
                            Candy carrot cake cake apple pie shortbread gingerbread shortbread macaroon.
                            Biscuit topping topping cotton candy candy tootsie roll pie tootsie roll.
                            Muffin cotton candy sesame snaps croissant sweet sugar plum lemon drops gummies cake.
                        </p>
                        <p>
                            Marshmallow gummies croissant cake candy sweet tootsie roll cake caramels.
                            Tart bonbon dessert cake apple pie jelly-o.
                            Marzipan carrot cake dessert chocolate biscuit candy.
                            Ice cream jelly-o toffee caramels wafer halvah pie.
                            Jelly sugar plum dessert cookie ice cream brownie dessert candy.
                            Brownie pudding sesame snaps halvah cupcake toffee caramels fruitcake.
                            Gummi bears cookie toffee chocolate bar lemon drops muffin.
                        </p>
                        <p>
                            Croissant fruitcake lollipop sweet roll sweet roll pie oat cake muffin donut.
                            Ice cream powder dessert sesame snaps pudding ice cream.
                        </p>
                    </div>
                </div>
                <div className="column is-half-desktop">
                    <img src={donutMonsters} alt="Donut Monsters" />
                </div>
            </div>
        </section >
    )
}

export default Hero;