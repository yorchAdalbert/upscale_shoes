import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="nav-bar">
             <Link to='/' className="brand text-decor">
                Upscale Shoes
            </Link>
            <ul className="categories">
                <Link to={'/category/nike'} className="text-decor" ><li>Nike</li></Link>
                <Link to={'/category/puma'} className="text-decor" ><li>Puma</li></Link>
                <Link to={'/category/adidas'} className="text-decor" ><li>Adidas</li></Link>
                <Link to={'/category/vans'} className="text-decor" ><li>Vans</li></Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;