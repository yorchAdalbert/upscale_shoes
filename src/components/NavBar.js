import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="nav-bar">
             <Link to='/' className="brand">
                Upscale Shoes
            </Link>
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