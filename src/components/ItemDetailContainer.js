import { useEffect, useState } from "react"
import { products, getItem, getProducts } from "../utils/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([])

    useEffect(() => {
        getItem(products, 2000)
        .then((res) => setDato(res[1]))
        .catch((error) => console.log(error))
    }, [])

    return (
        <section className="item-detail">
            { 
                <ItemDetail item={dato} />
            }
        </section>
    )
}

export default ItemDetailContainer