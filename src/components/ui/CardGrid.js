
const CardGrid = (props) => {
    return (
        <div className="tile is-ancestor columns is-multiline">
            {props.children}
        </div>
    )
}

export default CardGrid;