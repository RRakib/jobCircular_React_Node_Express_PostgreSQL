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
                        <input 
                            type = "text"
                            name = "title"
                            value = {this.state.title} 
                            onChange = {this.handleChange}
                            placeholder = "Please enter the title"
                        />
                        <br />
                        <p>Budget</p>
                        <input 
                            type = "text"
                            name = "budget"
                            value = {this.state.budget} 
                            onChange = {this.handleChange}
                            placeholder = "Please enter the budget"
                        />
                        <br />
                        <p>Discription</p>
                        <textarea 
                            type = "text"
                            name = "discription"
                            value = {this.state.discription} 
                            onChange = {this.handleChange}
                            placeholder = "Please add discription"
                        />
                        <br />
                        <p>Technologies</p>
                        <input 
                            type = "text"
                            name = "technologies"
                            value = {this.state.technologies} 
                            onChange = {this.handleChange}
                            placeholder = "Please enter the required technologies"
                        />
                        <br />
                        <p>Contact Email</p>
                        <input 
                            type = "email"
                            name = "email"
                            value = {this.state.email} 
                            onChange = {this.handleChange}
                            placeholder = "Please enter the email"
                        />
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