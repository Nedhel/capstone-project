import { Link } from "react-router-dom";

export function Nav(){
    return(
        <nav className="nav">
            <ul>
                <li>
                    <Link to='/' aria-label="On Click">Home</Link>
                </li>
                <li>
                    <Link to='' aria-label="On Click">About</Link>
                </li>
                <li>
                    <Link to='' aria-label="On Click">Menu</Link>
                </li>
                <li>
                    <Link to='/booking' aria-label="On Click">Reservation</Link>
                </li>
                <li>
                    <Link to='' aria-label="On Click">Order Online</Link>
                </li>
                <li>
                    <Link to='' aria-label="On Click">Login</Link>
                </li>
            </ul>
        </nav>
    )
}