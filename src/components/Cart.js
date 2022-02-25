import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);
  
  return (
    <section className="main-cart">
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
                  <p>{`total: ${item.quantity * item.price}`}</p>
                  <p onClick={() => removeItem(item.id)} className="delete-button text-center">Quitar producto</p>
                </div>
              </section>
              )
          : 
            <div className="loading-section">
              <p>{`Tienes ${cartItems.length} articulos en tu carrito...`}</p>
              <Link to="/" className="text-decor"><p className="regular-button">Seguir comprando</p></Link>
            </div>
      }
      {
        cartItems.length != 0 && 
          cartItems.map(elem => 
            <article key={elem.id}>
              <span>{elem.title}</span>
              <span>{elem.quantity}</span>
              <span>{elem.quantity * elem.price}</span>
            </article>)
      }
    </section> 
  )
}

export default Cart

