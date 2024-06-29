import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Tour of Heroes</h1>
            <div className="links">
                <Link to="/tour_of_heros/">DashBoard</Link>
                <Link to="/tour_of_heros/heros">Heroes</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;