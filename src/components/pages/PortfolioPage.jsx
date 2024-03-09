import { cWorks, pWorks } from '../../seeds/portfolio'
import Project from '../mini-components/Project'
export default function Portfolio () {
    return(
    <section id="Works">
        <h2>
            My Works
        </h2>
        <aside> 
            <h2 className='works-label'>Collaborative</h2>
            {/* Displaying Collaborative Works On The Page */}
            <div className='works-div'>
                {cWorks.map((app) =>(
                    <Project key={app.id} app={app}/>
                ))}
            </div>
            
        </aside>
        <aside> 
            <h2 className='works-label'>Personal Projects</h2>
            {/* Displaying Personal Projects on the Page */}
            <div className='works-div'>
                {pWorks.map((app) =>(
                    <Project key={app.id} app={app}/>
                ))}
            </div>
            
        </aside>
    </section>
    )
}