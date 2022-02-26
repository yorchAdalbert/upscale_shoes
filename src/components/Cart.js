import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);
  const totalCost = cartItems.map(elem => elem.price * elem.quantity)
  
  return (
    <>
      {
        cartItems.length != 0 &&
          <section className="main-cart">
            {
            cartItems.map(item => 
              <article className="cart-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h3 className="card-title text-center">{item.title}</h3>
                  <p>{`Precio: ${item.price}`}</p>
                  <p>{`Unidades: ${item.quantity}`}</p>
                  <p>{`total: ${item.quantity * item.price}`}</p>
                  <p onClick={() => removeItem(item.id)} className="delete-button text-center">Quitar producto</p>
                </div>
              </article>
              )
            }
            <div className="summary">
              <div>
                <p className="text-center">Resume de compra</p>
              </div>
              <table>
                <thead>
                  <tr className="table-line">
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Unidades</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item, index) => 
                      <tr key={item.id} className="table-line">
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td>{item.quantity * item.price}</td>
                      </tr>
                      )
                  }
                </tbody>
              </table>
              <div>
                <p className="text-center">Monto total de tu compra</p>
                <p className="text-center">
                  {
                    `MX$${totalCost.reduce((a, b) => a + b, 0)}`
                  }
                </p>
                <p className="text-center">Pagar</p>
              </div>
            </div>
            </section>
      
      }
      {
              cartItems.length === 0 &&
              <div className="loading-section">
                <p>{`Tienes ${cartItems.length} articulos en tu carrito...`}</p>
                <Link to="/" className="text-decor"><p className="regular-button">Seguir comprando</p></Link>
              </div>
      }
    </>
  )
}

export default Cart

