import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalItems } = useContext(CartContext)

    return (
        <div className="cart-shoping-area">
           <Link to="/cart" className="text-decor"><img src="./cart-shoping.png" alt="Cart shoping item" className="cart-shoping" /></Link> 
           {
                totalItems !== 0 && <span className="item-counter">{totalItems}</span>
           }
        </div>
    )
}

export default CartWidget;