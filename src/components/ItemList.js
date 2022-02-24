import Item from "./Item";

const ItemList = ( { item } ) => (
    <section className="item-section">
        {
            item.length > 0 ? 
                item.map(item => 
                    <Item 
                        key={item.id} 
                        title={item.title} 
                        imgSource={item.imgSource} 
                        price={item.price} 
                        stock={item.stock}
                        id={item.id}
                    /> ) 
                : <div className="loading-section" >
                    <p>Loading...</p> 
                  </div>
        }
    </section>
)


export default ItemList;