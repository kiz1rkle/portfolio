
export default function Project(props) {

    return(
        <div className="card">
            <h3>{props.title}</h3>
            <a href={props.appUrl}>
                <img src={props.imageUrl} alt={props.imgAlt}></img>
            </a>
            
            <p>{props.desc}</p>
            <button href={props.repoUrl}>Repo Link</button>
            <button href={props.appUrl}>App Link</button>
        </div>
        
    )
}