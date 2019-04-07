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
export const postData = (data) => (dispatch) => {
    Axios.post("/jobs/add" , data)
         .then(job => {
             dispatch({
                 type : "POST_DATA",
                 payload : {
                     data : job
                 }
             })
         })
         .catch(err => console.log("ERROR! " + err))
}