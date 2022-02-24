import { useContext } from "react"
import { CartContext } from "./CartContext"

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);

  return (
    <>
      {cartItems.length !=0 && <p onClick={clearCart} className="delete-button text-center">Eliminar todo</p>}
      {
        cartItems.length != 0 
          ?
            cartItems.map(item => 
              <section className="cart-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h3 className="card-title text-center">{item.title}</h3>
                  <p>{`Precio: ${item.price}`}</p>
                  <p>{`Unidades: ${item.quantity}`}</p>
                  <p onClick={() => removeItem(item.id)} className="delete-button text-center">Quitar producto</p>
                </div>
              </section>
              )
          : 
            <div className="loading-section">
              <p>{`Tienes ${cartItems.length} articulos en tu carrito...`}</p>
            </div>
      }
    </> 
  )
}

export default Cart

