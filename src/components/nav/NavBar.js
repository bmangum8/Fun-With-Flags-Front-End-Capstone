import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"



export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">

            <li className="navbar_item active">
                <Link className="navbar_link" to="/rules">Rules</Link>
            </li>
            <li className="navbar_item active">
                <Link className="navbar_link" to="/favorites">My Favorites</Link>
            </li>
            <li className="navbar_item active">
                <Link className="navbar_link" to="/play">Play</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("flag_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}


//continue this for each item in the nav bar: (Stretch Goal: My Scores)