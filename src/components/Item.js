const Item = ( {title, imgSource, price, stock} ) => {
    return (
        <article className="item-card">
            <h2 className="card-title">{title}</h2>
            <img src={imgSource} alt={title} className="img-item" />
            <p><b>Price: </b>{price}</p>
            <p><b>stock: </b>{stock}</p>
        </article>
    )
}

export default Item;