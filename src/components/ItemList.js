import { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = () => {
    return (
        <section className="item-section">
            <Item key="1"
                imgSource="https://cdn.runrepeat.com/i/nike/24858/nike-tennis-classic-retro-tennis-shoes-black-white-312495-011-mens-black-white-3f2e-main.jpg" 
                title='Nike tennis Classic'
                price="$46"
                stock="5"
            />
               <Item key="2"
                imgSource="https://cdn.runrepeat.com/i/nike/24858/nike-tennis-classic-retro-tennis-shoes-black-white-312495-011-mens-black-white-3f2e-main.jpg" 
                title='Nike tennis Classic'
                price="$46"
                stock="5"
            />
               <Item key="3"
                imgSource="https://cdn.runrepeat.com/i/nike/24858/nike-tennis-classic-retro-tennis-shoes-black-white-312495-011-mens-black-white-3f2e-main.jpg" 
                title='Nike tennis Classic'
                price="$46"
                stock="5"
            />
               <Item key="4"
                imgSource="https://cdn.runrepeat.com/i/nike/24858/nike-tennis-classic-retro-tennis-shoes-black-white-312495-011-mens-black-white-3f2e-main.jpg" 
                title='Nike tennis Classic'
                price="$46"
                stock="5"
            />
        </section>
    )
}

export default ItemList;