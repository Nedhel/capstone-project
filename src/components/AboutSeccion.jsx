import About1 from '../assets/MarioandAdrianA.jpg'
import About2 from '../assets/MarioandAdrianB.jpg'
export function AboutSeccion(){
    return(
        <section className="aboutContainer">
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className='aboutImgContainer'>
                <img src={About2} alt="About photo2" className='aboutImg1'/>
                <img src={About1} alt="About photo1" className='aboutImg2'/>
            </div>
        </section>
    )
}