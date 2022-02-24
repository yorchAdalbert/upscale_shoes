import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products, getItem } from "../utils/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getItem(products.find(item => item.id == id), 2000)
        .then((res) => setDato(res))
        .catch((error) => console.log(error))
    }, [])

    return (
        <section className="item-detail">
            { 
                dato.hasOwnProperty('id') ? <ItemDetail item={dato} /> 
                                          :  <p>Loading...</p>
            }
        </section>
    )
}

export default ItemDetailContainer