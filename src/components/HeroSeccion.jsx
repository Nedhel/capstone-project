import Restauranfood from '../assets/restauranfood.jpg'
export function HeroSeccion(){
    return(
        <section className="heroContainer">
            <div className='heroInfoContainer'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Reserve Table</button>
            </div>
            <div className='heroImgContainer'>
                <img src={Restauranfood} alt="Restauran" />
            </div>
        </section>
    )
}