import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const[cartItems, setCartItems] = useState([])
    const[totalItems, setTotalItems] = useState(0)

    const addToCart = (sneaker, itemQty) => {
        const checkItem = cartItems.find(element => element.id == sneaker.id)
        if (checkItem === undefined)
            setCartItems([
                ...cartItems,
                {
                id: sneaker.id,
                title: sneaker.title,
                image: sneaker.imgSource,
                price: sneaker.price,
                quantity: itemQty
            }])
        else
           checkItem.quantity += itemQty
    }

    const removeItem = (itemId) => {
        const filterCartItem = cartItems.filter(element => element.id != itemId)
        setCartItems(filterCartItem)

    }

    const clearCart = () => {
        setCartItems([])
    }

    const sumTotalItems = (num) => setTotalItems(totalItems + num)
    
    
    return (
        <CartContext.Provider value={ {cartItems, addToCart, removeItem, clearCart, totalItems, sumTotalItems} }>
            {children}
            </CartContext.Provider>
    )
}

export default CartContextProvider