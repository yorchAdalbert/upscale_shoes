import { useState, useEffect } from "react";
import Item from "./Item";
import { getProducts, products } from "../utils/products";

const ItemList = () => {
    const[items, setItems] = useState([])

    useEffect(() => {
        getProducts(products, 2000)
        .then((res) => setItems(res))
        .catch((e) => console.log(e))
    },[])

    return (
        <section className="item-section">
            {
                items.length > 0 ? 
                    items.map(item => 
                        <Item 
                            key={item.id} 
                            title={item.title} 
                            imgSource={item.imgSource} 
                            price={item.price} 
                            stock={item.stock}
                        /> ) 
                    : 
                    <p>Loading...</p> 
            }
        </section>
    )
}

export default ItemList;