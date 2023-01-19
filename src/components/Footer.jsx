import Logo from '../assets/Logo.svg'
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className='footer'>
            <img src={Logo} alt="Logo" />
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to='/' aria-label="On Click">Home</Link></li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link to='/booking' aria-label="On Click">Reservation</Link></li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    )
}