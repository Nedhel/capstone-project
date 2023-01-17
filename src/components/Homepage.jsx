import {HeroSeccion} from './HeroSeccion'
import {HighlightsSeccion} from './HighlightsSeccion'
import {AboutSeccion} from './AboutSeccion'

export default function Homepage(){
    return(
        <main className='mainContainer'>
            <HeroSeccion />
            <HighlightsSeccion />
            <AboutSeccion />
        </main>
    )
}