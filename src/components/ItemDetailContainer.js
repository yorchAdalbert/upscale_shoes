import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import db from "../utils/fireBaseConfig"
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getOneData = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            return docSnap.data()
        }

        getOneData()
            .then(data => setDato(data))
            .catch(e => console.log(e))

    }, [])


    return (
        <section className="item-detail">
            { 
                dato.hasOwnProperty('title') ? <ItemDetail item={dato} /> 
                                             : <p>Loading...</p>
            }
        </section>
    )
}

export default ItemDetailContainer