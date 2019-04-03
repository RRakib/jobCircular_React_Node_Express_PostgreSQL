// Imports
import Thunk from "redux-thunk"
import rootReducer from "./Reducers/rootReducer"
import {createStore , compose , applyMiddleware} from "redux";

// Extraction Thunk
const middleware = [Thunk]

// Redux Store
const Store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
);

// Exports
export default Store;