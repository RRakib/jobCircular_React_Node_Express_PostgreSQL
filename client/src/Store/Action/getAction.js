// Imports
import Axios from "axios"

// Action
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