import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);
  const totalCost = cartItems.map(elem => elem.price * elem.quantity)
  
  return (
    <>
      
      {
        cartItems.length === 0 &&
            <div className="loading-section">
              <p>{`Tienes ${cartItems.length} articulos en tu carrito...`}</p>
              <Link to="/" className="text-decor"><p className="regular-button">Seguir comprando</p></Link>
          </div>
      }
      <section className="cartDetail-container">
        <div className="cartDetail-box">
        {
              cartItems.map(item => 
                <article className="cart-card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-info">
                    <h3 className="card-title text-center">{item.title}</h3>
                    <table className="detail-table">
                      <thead>
                        <tr className="table-line">
                          <th scope="col">Precio</th>
                          <th scope="col">Unidades</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-line">
                          <td>{`MX$${item.price}`}</td>
                          <td className="text-center">{item.quantity}</td>
                          <td>{`MX$${item.price * item.quantity}`}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p onClick={() => removeItem(item.id)} className="delete-button text-center">Quitar producto</p>
                  </div>
                </article>
                )
              }
        </div>
        <div className="summary-box">
          <h3 className="card-title text-center">Resume de compra</h3>
          <table className="summary-table">
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
          <div className="total-price">
            <p className="text-center">Total de tu compra</p>
            <p className="text-center">
              {
                `MX$${totalCost.reduce((a, b) => a + b, 0)}`
              }
            </p>
            <p className="delete-button text-center purple">Comprar ahora</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default Cart

