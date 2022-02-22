import { useContext } from "react"
import { CartContext } from "./CartContext"

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems)

  return (
      <>
        <h1>{cartItems.title}</h1>
      </>
  )
}

export default Cart

