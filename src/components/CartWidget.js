import { useContext } from "react"
import CartContext from "./CartContext"

const CartWidget = () => {
    const test = useContext(CartContext)
    console.log(test)

    return (
        <div className="cart-shoping-area">
            <img src="./cart-shoping.png" alt="Cart shoping item" className="cart-shoping" />
            <span className="item-counter">{test[2]}</span>
        </div>
    )
}

export default CartWidget;