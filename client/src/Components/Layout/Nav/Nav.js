import "./Nav.css"
import React from "react"
import {NavLink} from "react-router-dom" 

const Nav = () => {
    return(
        <div className="container">
            <div className="logo">
                <span>J</span>obs
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="jobs">Jobs</NavLink>
                <NavLink to="add_jobs">Add</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Nav;