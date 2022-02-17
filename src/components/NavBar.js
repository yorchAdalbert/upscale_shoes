import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="nav-bar">
             <span className="brand">
                Upscale Shoes
            </span>
            <ul className="categories">
                <li>Nike</li>
                <li>Puma</li>
                <li>Adidas</li>
                <li>Vans</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;