import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="nav-bar">
             <Link to='/' className="brand">
                Upscale Shoes
            </Link>
            <ul className="categories">
                <Link to={'/category/nike'} ><li>Nike</li></Link>
                <Link to={'/category/puma'} ><li>Puma</li></Link>
                <Link to={'/category/adidas'} ><li>Adidas</li></Link>
                <Link to={'/category/vans'} ><li>Vans</li></Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;