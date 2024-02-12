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
                    <div key={app.id} className="card">
                        <h3 className='title'>{app.title}</h3>
                        <a href={app.appUrl}>
                            <img src={app.imageUrl} alt={app.imgAlt}/>
                        </a>
                        <p>{app.desc}</p>
                        <button href={app.repoUrl}>Repo Link</button>
                        <button href={app.appUrl}>App Link</button>
                    </div>
                ))}
            </div>
            
        </aside>
        <aside> 
            <h2 className='works-label'>Personal Projects</h2>
            {/* Displaying Personal Projects on the Page */}
            <div className='works-div'>
                {pWorks.map((app) =>(
                    <div className="card">
                    <h3 className='title'>{app.title}</h3>
                    <a href={app.appUrl}>
                        <img src={app.imageUrl} alt={app.imgAlt}></img>
                    </a>
                    
                    <p>{app.desc}</p>
                    <button href={app.repoUrl}>Repo Link</button>
                    <button href={app.appUrl}>App Link</button>
                </div>
                ))}
            </div>
            
        </aside>
    </section>
    )
}