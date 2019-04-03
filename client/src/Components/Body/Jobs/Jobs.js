// Imports
import "./Jobs.css"
import React from "react"

// Stateful Component
const Jobs = () => {
    return(
        //  Body
        <div class="body">
            <h2>All Jobs</h2>
            <div class="jobs">
                <h3>> Looking for a react developer</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <ul>
                    <li>Salary: <b>$1200</b> </li>
                    <li> <a href="#">Apply Now</a> </li>
                </ul>
                <div class="required">
                    <small>Requirements: <span> React, Redux , Javascript</span> </small>
                </div>
            </div>
        </div>
    )
}

// Exporting
export default Jobs;