const Counter = ({ value, onMinusClick, onPlusClick }) => {
  return (
    <div className="buttons">
      <button
        disabled={!value}
        onClick={onMinusClick}
        className={'button is-small mr-0 mb-0'}
        aria-label="Minus"
      >
        <span className="icon is-small">
          <i className="fa-solid fa-minus" />
        </span>
      </button>
      <span className="mr-1 ml-1">{value}</span>
      <button
        onClick={onPlusClick}
        className="button is-small mb-0"
        aria-label="Plus"
      >
        <span className="icon is-small">
          <i className="fa-solid fa-plus" />
        </span>
      </button>
    </div>
  )
}

export default Counter
