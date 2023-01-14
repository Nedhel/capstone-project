import {HeroSeccion} from './HeroSeccion'
import {HighlightsSeccion} from './HighlightsSeccion'
import {TestimonialsSeccion} from './TestimonialsSeccion'
import {AboutSeccion} from './AboutSeccion'

export default function Main(){
    return(
        <main className='mainContainer'>
            <HeroSeccion />
            <HighlightsSeccion />
            <TestimonialsSeccion />
            <AboutSeccion />
        </main>
    )
}