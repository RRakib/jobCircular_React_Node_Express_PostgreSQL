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
        console.log(this.props)
        const {errors } = this.props.get
        return(
            <div className="body">
                <h2>Add Jobs</h2>
                <div className="jobs">
                    <form onSubmit={this.handleSubmit}>
                        <p>Title</p>
                        <p style={{color : "red", fontSize : 12}}>{errors.map(item => item.title)}</p>
                        <input 
                            type = "text"
                            name = "title"
                            value = {this.state.title} 
                            onChange = {this.handleChange}
                            placeholder = "Please enter the title"
                            required
                        />
                        <br />
                        <p>Budget</p>
                        <p style={{color : "red", fontSize : 12}}>{errors.map(item => item.budget)}</p>
                        <input 
                            type = "text"
                            name = "budget"
                            value = {this.state.budget} 
                            onChange = {this.handleChange}
                            placeholder = "Please enter the budget"
                            required
                        />
                        <br />
                        <p>Discription</p>
                        <p style={{color : "red", fontSize : 12}}>{errors.map(item => item.discription)}</p>
                        <textarea 
                            type = "text"
                            name = "discription"
                            value = {this.state.discription} 
                            onChange = {this.handleChange}
                            placeholder = "Please add discription"
                            required
                        />
                        <br />
                        <p>Technologies</p>
                        <p style={{color : "red", fontSize : 12}}>{errors.map(item => item.technologies)}</p>
                        <input 
                            type = "text"
                            name = "technologies"
                            value = {this.state.technologies} 
                            onChange = {this.handleChange}
                            placeholder = "Please enter the required technologies"
                            required
                        />
                        <br />
                        <p>Contact Email</p>
                        <p style={{color : "red", fontSize : 12}}>{errors.map(item => item.contact_email)}</p>
                        <input 
                            type = "email"
                            name = "contact_email"
                            value = {this.state.contact_email} 
                            onChange = {this.handleChange}
                            placeholder = "Please enter the email"
                            required    
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