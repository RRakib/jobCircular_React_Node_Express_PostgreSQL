// Imports
import React, {Component} from "react"

// Statefull Component
class Add extends Component{
    constructor(){
        super();
        this.state = {
            title: "",
            budget : "",
            discription : "",
            technologies : "",
            contact_email : ""
        }
    }
    render(){
        return(
            <div className="body">
                <h2>Add Jobs</h2>
                <div className="jobs">
                    <form onSubmit={this.handleSubmit}>
                        <p>Title</p>
                        <input />
                        <br />
                        <p>Budget</p>
                        <input />
                        <br />
                        <p>Discription</p>
                        <textarea />
                        <br />
                        <p>Technologies</p>
                        <input />
                        <br />
                        <p>Contact Email</p>
                        <input />
                        <br />
                        <button>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

// Exporting
export default Add;