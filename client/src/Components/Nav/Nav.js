import "./Nav.css"
import React from "react"

const Nav = () => {
    return(
        <div className="container">
            <div className="logo">
                <span>J</span>obs
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/jobs/all_jobs">Jobs</a>
                <a href="/jobs/add">Add</a>
                <a href="/jobs/Contact">Contact</a>
            </nav>
        </div>
    )
}

export default Nav;