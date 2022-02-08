const Item = ( {title, imgSource, price, stock} ) => {
    return (
        <article className="item-card">
            <h2>{title}</h2>
            <img src={imgSource} alt={title} className="img-item" />
            <p>Price: {price}</p>
            <p>stock: {stock}</p>
        </article>
    )
}

export default Item;