import Restauranfood from '../assets/restauranfood.jpg'
import { useNavigate } from "react-router-dom";
export function HeroSeccion(){
    const navigate = useNavigate();
    function handleButtonClick(){
        navigate("/booking");
    }
    return(
        <section className="heroContainer">
            <div className='heroInfoContainer'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button onClick={handleButtonClick} aria-label="On Click">Reserve Table</button>
            </div>
            <div className='heroImgContainer'>
                <img src={Restauranfood} alt="Restauran" />
            </div>
        </section>
    )
}