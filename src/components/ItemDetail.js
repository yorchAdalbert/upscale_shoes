import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "./CartContext"

const ItemDetail = ( {item} ) => {
    const[itemSelected, setItemSeleted] = useState(true)
    const { addToCart } = useContext(CartContext)

    const handelClick= (items) => {
        if (items) {
            setItemSeleted(false)
            addToCart(item)
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
                                    <ItemCount stock={parseInt(item.stock)} initial='0' onAdd={handelClick}/>
                                :
                                   <Link to='/cart' className="text-decor"><p className="item-count buy-button" style={{'textAlign': 'center'}} >Ir al carrito</p> </Link>
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