import ItemCount from "./ItemCount"

const ItemDetail = ( {item} ) => (
    <div className="item-information">
        <div className="image-description">
            <img src={item.imgSource} alt={item.title} />
        </div>
        <div className="item-description">
            <h2 className="text-center card-title">{item.title}</h2>
            <p>{item.description}</p>
            <p className="text-right">{`Precio: ${item.price}`}</p>
            <p className="text-right">{`Stock: ${item.stock}`}</p>
            <ItemCount stock={item.stock} initial="1" />
        </div>
    </div>
)

export default ItemDetail