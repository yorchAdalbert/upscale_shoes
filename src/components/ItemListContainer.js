import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem, products } from '../utils/products';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const[sneakers, setSneakers] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        getItem(products.filter(item => {
            if (categoryId === undefined) return item
            return item.category === categoryId
        }), 2000)
            .then( result => setSneakers(result) )
            .catch( error => console.log(error) )
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