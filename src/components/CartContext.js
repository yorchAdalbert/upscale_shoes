import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const[cartItems, setCartItems] = useState([])

    const addToCart = (sneaker) => {
        setCartItems(sneaker)
    }
    
    return (
        <CartContext.Provider value={ {cartItems, addToCart} }>
            {children}
            </CartContext.Provider>
    )
}

export default CartContextProvider