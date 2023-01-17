import {Nav} from './Nav'
import Logo from '../assets/Logo.svg'
import Hamburger from '../assets/icon_hamburguer.svg'


export default function Header(){
    return(
        <header className='header'>
            <div className='hamburguerContainer'>
                <img src={Hamburger} alt="Logo Little Lemon" className='hamburguer'/>
            </div>
            <div className='logoContainer'>
                <img src={Logo} alt="Logo Little Lemon"/>
            </div>
            <Nav />
        </header>
    )
}