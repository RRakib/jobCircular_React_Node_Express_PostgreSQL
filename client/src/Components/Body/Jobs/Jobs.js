// Imports
import "./Jobs.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux"
import React , {Component} from "react"
import { getData } from "../../../Store/Action/getAction"

// Stateful Component
class Jobs extends Component{

    // Using Hooks
    componentDidMount = () => {
        const {history , getD} = this.props;
        getD(history)
    }

    render(){
        const {data} = this.props.get.data;
        const jobDetails = data?( data.map(items => {
            return(
                <div key={items.id}>
                    <div className="jobs">
                        <h3>> {items.title} </h3>
                        <p>
                            {items.discription}
                        </p>
                        <ul>
                            <li>Salary: <b>{items.budget}</b> </li>
                            <li> <Link to="/">Apply Now</Link> </li>
                        </ul>
                        <div className="required">
                            <small>Requirements: <span> {items.technologies}</span> </small>
                        </div>
                    </div>
                </div>
            )
        })) : "Loading..."
        return(
            <div  className="body">
                <h2>All Jobs</h2>
                {jobDetails}
            </div>
        )
    }
}

// Accessing Redux State
const mapStateToProps = (state) => {
    return state
}

// Accessing action dispatcher
const mapDispatchToProps = (dispatch) => {
    return{
        getD : (history) => dispatch(getData(history))
    }
} 

// Exporting
export default connect(mapStateToProps , mapDispatchToProps)(Jobs);