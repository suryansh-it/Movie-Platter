import {Link} from "react-router-dom"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to= '/' className="navlink">Home</Link>
            <Link to= '/favourites' className="navlink">Favourites</Link>
        </div>
    </nav>
}

export default NavBar