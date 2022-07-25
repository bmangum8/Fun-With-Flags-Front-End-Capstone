import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"



export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link" to="/facts">Facts</Link>
            </li>
            <li className="navbar_item active">
                <Link className="navbar_link" to="/play">Play</Link>
            </li>
            <li className="navbar_item active">
                <Link className="navbar_link" to="/rules">Rules</Link>
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


//continue this for each item in the nav bar: Home, Play, Flag Facts, (Stretch Goal: My Scores)
//look at honey raes NavBar.js to get the logout button that needs to be in the return also