// Imports
import { connect } from "react-redux";
import React, {Component} from "react";
import { postData } from "../../../Store/Action/getAction";

// Statefull Component
class Add extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            budget : "",
            discription : "",
            technologies : "",
            contact_email : ""
        }
    }
    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {title,budget,discription,technologies,contact_email } = this.state;
        let data = {
            title,
            budget,
            discription,
            technologies,
            contact_email 
        }
        this.props.postData(data , this.props.history)
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
                            name = "contact_email"
                            value = {this.state.contact_email} 
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

const mapStateToProps = (state) => {
    return state
}
const dispatchToProps = (dispatch) => {
    return{
        postData : (data , history) => dispatch(postData(data , history))
    }
}

// Exporting
export default connect(mapStateToProps , dispatchToProps)(Add);