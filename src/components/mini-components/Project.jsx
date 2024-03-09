
export default function Project({app}) {

    return(
        <div className="card">
            <h3 className='title'>{app.title}</h3>
            <a href={app.appUrl}>
                <img src={app.imageUrl} alt={app.imgAlt}/>
            </a>
            <p>{app.desc}</p>
            <a href={app.repoUrl}>
                <button>Repo Link</button>
            </a>
            <a href={app.appUrl}>
                <button>App Link</button>
            </a>
                        
        </div>
        
    )
}