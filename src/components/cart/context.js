import { createContext, useReducer } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function CartProvider({ children }) {
    const [items, dispatch] = useReducer(
        cartReducer,
        initialCart
    );

    return (
        <TasksContext.Provider value={items}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

function cartReducer(items, action) {
    switch (action.type) {
        case 'added': {
            return [...items, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return items.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return items.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialCart = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];