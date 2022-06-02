import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink className="nav" to="/">  Home  </NavLink>
            <NavLink className="nav" to="/cars">  The Garage  </NavLink>
            <NavLink className="nav" to="/projects">  Projects  </NavLink>
        </nav>
    )
}

export default NavBar;