// Imports
import Axios from "axios"

// Getting The Data from DB
export const getData = (history) => (dispatch) => {
    Axios.get("/jobs")
         .then(job => {
             dispatch({
                 type : "GET_DATA",
                 payload : {
                     data : job
                 }
             })
         })
         .catch(err => console.log("ERROR!! " + err))

}

// Posting Data from 
export const postData = (data , history) => (dispatch) => {
    Axios.post("/jobs/add" , data)
         .then(job => {
            if(job.data.length > 0){
                let list = job.data.map(items => {return items})
                console.log(job)
                dispatch({
                    type : "ERRORS",
                    payload : {
                        data : list
                    }
                })
            }
            else{
                dispatch({
                    type : "POST_DATA",
                    payload : {
                        data : job
                    }
                });
                history.push("/jobs");
            }
         })
         .catch(err => console.log("ERROR! " + err))
}