import Brand from "./Brand";
import Categories from "./Categories";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Brand />
            <Categories />
            <CartWidget />
        </div>
    )
}

export default NavBar;