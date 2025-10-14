import { useReducer } from "react"
import { useContext } from "react"
import { createContext } from "react"

const Context = createContext('light')

// action {type: 'products', payload: data[]}
const reducer = (state, action) => {
    // write the loogic
    switch (action.type) {
        case 'products':
            return {
                ...state,
                products: action.payload
            }
        case 'loading':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    user: {},
    products: [],
    currentProduct: {}, // id product
    isLoading: false
}

/**
 * // file logic
 * dispatch({type: 'loading', payload: true})
 * dispatch({type: 'products', payload: data})
 * dispatch({type: 'loading', payload: false})
 * 
 * setdata(data) -> replace -> dispatch({type: 'products', payload: data})
 */

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return <Context.Provider value={{ state, dispatch }}>
        {children}
    </Context.Provider>
}

export const useTheme = useContext(Context)