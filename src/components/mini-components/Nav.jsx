import * as React from "react";
import { Link } from "react-router-dom";

// NOT FINISHED: NOT SURE HOW TO COMPLETE THIS
function Nav(){

    return(
        // Children in React must be nested within a parent
        <nav>
            {/* <Link to="/portfolio"> Portfolio </Link> */}
            <a href='/'>About Me</a>
            <a href='/portfolio'>Portfolio</a>
            <a href='/contact'>Contact Me</a>
            <a href='/resume'>Resume</a>

            {/* <a href='/'>About Me</a>
            <a href='#Works'>Portfolio</a>
            <a href='#contact-div'>Contact Me</a>
            <a href='#resumepage'>Resume</a> */}
        </nav>

    )
}

export default Nav;