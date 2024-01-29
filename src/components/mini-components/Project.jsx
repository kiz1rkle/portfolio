
export default function Project(props) {

    return(
        <div className="card">
            <h3>{props.title}</h3>
            <a href={props.appUrl}>
                <img src={props.imageUrl} alt={props.imgAlt}></img>
            </a>
            <a href={props.repoUrl}>Repo Link</a>
            <a href={props.appUrl}>App Link</a>
            <p>{props.desc}</p>
        </div>
    )
}