import { useContext } from "react"
import { CartContext } from "./CartContext"

const CartWidget = () => {
    const test = useContext(CartContext)

    return (
        <div className="cart-shoping-area">
            <img src="./cart-shoping.png" alt="Cart shoping item" className="cart-shoping" />
            <span className="item-counter">5</span>
        </div>
    )
}

export default CartWidget;