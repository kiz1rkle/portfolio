import * as React from "react";
import { Link } from "react-router-dom";

// NOT FINISHED: NOT SURE HOW TO COMPLETE THIS
function Nav(){

    return(
        // Children in React must be nested within a parent
        <nav>
            {/* <Link to="/portfolio"> Portfolio </Link> */}
            <a>About Me</a>
            <a>Portfolio</a>
            <a>Contact Me</a>
            <a>Resume</a>
        </nav>

    )
}

export default Nav;