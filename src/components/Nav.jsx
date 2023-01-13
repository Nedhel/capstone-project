import { Link } from 'react-scroll'
export function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='Home'>Home</Link>
                </li>
                <li>
                    <Link to='About'>About</Link>
                </li>
                <li>
                    <Link to='Menu'>Menu</Link>
                </li>
                <li>
                    <Link to='Reservation'>Reservation</Link>
                </li>
                <li>
                    <Link to='Order'>Order Online</Link>
                </li>
                <li>
                    <Link to='Login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}