import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products, getItem, getProducts } from "../utils/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([])
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        getItem(products, 2000)
        .then((res) => setDato(res[id]))
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