import {createContext, useReducer} from "react";

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

const init = () => {
    return {items: []}
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            return {
                ...state,
                items: [...state.items, action.item]
            }
        }
    }
}


const CartContextProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartValues, init)

    function addItem(item) {
        dispatch({
            type: "add",
            item
        });
    }

    return (<CartContext.Provider value={cartState}>
        {props.children}
    </CartContext.Provider>);
}


export {CartContext, CartContextProvider};