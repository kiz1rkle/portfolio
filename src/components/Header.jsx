import Nav from './mini-components/Nav'

export default function Header() {

    return(
        <>
            <header>
                <h1>Portfolio</h1>
                <Nav />
            </header>
            <div>
                <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/58919609_8VbzGiYepkRyQD3.gif" />
            </div>

            <aside id="hello">
                <h2>Hello from RuckusEnjoyer! 
                    <br />
                    <span className="small">Welcome to my Portfolio.</span>
                </h2>
            </aside>
        </>
        
    )
}