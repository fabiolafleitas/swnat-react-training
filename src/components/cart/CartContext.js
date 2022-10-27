import { createContext, useReducer } from "react"

const CartContext = createContext({
    items: [],
    add: () => {
    },
    remove: () => {
    },
    reset: () => {
    }
})

const defaultCartValues = {
    items: []
}

const initialState = () => {
    return { items: [] }
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            return {
                items: { ...state.items, [action.item.id]: { ...action.item } }
            }
            // return {
            //     ...state,
            //     items: [...state.items, action.item]
            // }
        }
    }
}


const CartContextProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, CartContext, initialState)

    console.log({ cartState })

    const addItem = (item) => {
        dispatch({
            type: "add",
            item
        })
    }

    const contextValue = {
        items: cartState.items,
        add: addItem,
    }

    return (<CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>)
}


export { CartContext, CartContextProvider }