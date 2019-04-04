// Imports
import getReducer from "./getReducer"
import { combineReducers } from "redux";

// Combining Other Reducer
const rootReducer = combineReducers({
    get : getReducer
})

// Exporting
export default rootReducer;