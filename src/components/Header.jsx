import Nav from './mini-components/Nav'

export default function Header() {

    return(
        <>
            <header>
                <h1>Portfolio</h1>
                <Nav />
            </header>
            <div>
                <img id='header-img' src="face.png" />
            </div>

            <aside id="hello">
                <h2>Hello from Kurtis Pullman! 
                    <br />
                    <span className="small">Welcome to my Portfolio.</span>
                </h2>
            </aside>
        </>
        
    )
}