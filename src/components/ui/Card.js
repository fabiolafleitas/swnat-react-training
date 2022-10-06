
const Card = (props) => {
    return (
        <div className="tile is-parent column is-one-third">
            <article className="tile is-child box">
                {props.children}
            </article>
        </div>
    );
}

export default Card;