import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/fireBaseConfig';


const ItemListContainer = () => {
    const[sneakers, setSneakers] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const dataBaseFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataBaseData = querySnapshot.docs.map(document => ({
                id: document.id, 
                ...document.data()
            }))
            return dataBaseData
        }
        dataBaseFetch()
            .then(data => setSneakers(data))
            .catch(error => console.log(error))
    }, [sneakers])

    return (
        <div className="items-container">
            {
                categoryId === undefined 
                    ? <h2>Catalogo de Sneakers</h2> 
                    : <h2>{`Sneakers ${categoryId}`}</h2> 
            }
            <ItemList item={sneakers}/>
        </div>
    )
}

export default ItemListContainer;