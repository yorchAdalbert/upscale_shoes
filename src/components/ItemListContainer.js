import ItemList from './ItemList';

const ItemListContainer = props => {
    return (
        <div className="items-container">
            <h2>{props.greeting}</h2>
            <ItemList />
        </div>
    );
}

export default ItemListContainer;