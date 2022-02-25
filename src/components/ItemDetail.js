import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { CartContext } from "./CartContext"

const ItemDetail = ( {item} ) => {
    const[itemSelected, setItemSeleted] = useState(true)
    const { addToCart, sumTotalItems } = useContext(CartContext)

    const handelClick= (itemQty) => {
        if (itemQty) {
            setItemSeleted(false)
            addToCart(item, itemQty)
            sumTotalItems(itemQty)
        }
    }

    return (
        <div className="item-information">
            <div className="image-description">
                <img src={item.imgSource} alt={item.title} />
            </div>
            <div className="item-description">
                <h2 className="text-center card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="item-selection">
                    <div className="selecting-item">
                        {
                            itemSelected 
                                ? 
                                    <ItemCount stock={parseInt(item.stock)} initial={0} onAdd={handelClick}/>
                                :
                                   <>
                                     <Link to='/cart' className="text-decor"><p className="item-count buy-button" style={{'textAlign': 'center'}} >Terminar compra</p> </Link>
                                     <Link to='/' className="text-decor"><p className="item-count buy-button" style={{'textAlign': 'center'}} >Seguir comprando</p> </Link>
                                   </>
                        }
                    </div>
                    <div className="price-section">
                        <p>{`Precio: ${item.price}`}</p>
                        <p>{`Stock: ${item.stock}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail