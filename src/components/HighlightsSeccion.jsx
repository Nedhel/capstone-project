import Bruchetta from '../assets/bruchetta.svg'
import Greek from '../assets/greek-salad.jpg'
import Lemon from '../assets/lemon-dessert.jpg'

export function HighlightsSeccion(){
    return(
        <section className="highlightsContainer">
            <h1>Specials</h1>
            <div></div>
            <button>Online Menu</button>
            <div className='cardContainer'>
            <div className="card">
                <img src={Greek} alt="Greek Salad" />
                <div className='cardContent'>
                    <div>
                        <h1>Greek Salad</h1>
                        <h2>$12.99</h2>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <h3>Order a delivery</h3>
                </div>
            </div>
            <div className="card">
                <img src={Bruchetta} alt="Bruchetta" />
                <div className='cardContent'>
                    <div>
                        <h1>Bruchetta</h1>
                        <h2>$5.99</h2>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <h3>Order a delivery</h3>
                </div>
            </div>
            <div className="card">
                <img src={Lemon} alt="Lemon Dessert" />
                <div className='cardContent'>
                    <div>
                        <h1>Lemon Dessert</h1>
                        <h2>$5.00</h2>
                    </div>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <h3>Order a delivery</h3>
                </div>
            </div>
            </div>
        </section>
    )
}