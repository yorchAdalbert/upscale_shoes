import { useState } from "react";

const ItemCount = ( {stock, initial, onAdd}) => {
    const [items, setItems] = useState(parseInt(initial));
    const [itemsInStock , setStock] = useState(parseInt(stock - initial));

    const addItem = () => {
        if (itemsInStock) {
            setItems(items + 1);
            setStock(itemsInStock - 1);
        }
    }

    const subtractItem = () => {
        if (items) {
            setItems(items - 1);
            setStock(itemsInStock + 1);
        }
    }

    return (
        <div className="item-count">
            <span className="count text-center" onClick={subtractItem}>-</span>
            <span className="display-items text-center">{items}</span>
            <span className="count text-center" onClick={addItem}>+</span>
        </div>
    )
}

export default ItemCount;