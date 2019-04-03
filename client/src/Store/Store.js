import Thunk from "redux-thunk"
import {createStore , compose , applyMiddleware} from "redux";
import rootReducer from "./Reducers/rootReducer"

const middleware = [Thunk]

const Store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
);

export default Store;