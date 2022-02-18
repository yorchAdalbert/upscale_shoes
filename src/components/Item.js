import { Link } from "react-router-dom";

const Item = ( {title, imgSource, price, stock, id} ) => {
    return (
        <Link to={`/item/${id}`}>
        <article className="item-card">
            <h2 className="card-title">{title}</h2>
            <img src={imgSource} alt={title} className="img-item" />
            <p><b>Price: </b>{price}</p>
            <p><b>stock: </b>{stock}</p>
        </article>
        </Link>
    )
}

export default Item;