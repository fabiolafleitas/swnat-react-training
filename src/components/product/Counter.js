import { useImperativeHandle, useReducer } from "react"

function init(initialCount) {
    return { count: initialCount }
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return init(action.payload)
        default:
            throw new Error()
    }
}


const Counter = ({ initialCount }, _ref) => {

    const [state, dispatch] = useReducer(reducer, initialCount, init)

    return (
        <div className="buttons">
            <button
                disabled={!state.count} onClick={() => dispatch({ type: 'decrement' })}
                className={"button is-small mr-0 mb-0"} aria-label="Minus">
                <span className="icon is-small">
                    <i className="fa-solid fa-minus" />
                </span>
            </button>
            <span className="mr-1 ml-1">{state.count}</span>
            <button
                onClick={() => dispatch({ type: 'increment' })}
                className="button is-small mb-0" aria-label="Plus">
                <span className="icon is-small">
                    <i className="fa-solid fa-plus" />
                </span>
            </button>
        </div>
    )
}

export default Counter