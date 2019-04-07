// Initial State
const init = {
    data : {}
}

// Reducer Setup
const getReducer = (state = init , action) => {
    switch(action.type){
        case "GET_DATA":
            return{
                data : action.payload.data
            }
        case "POST DATA":
            return{
                data : action.payload.data
            }
        default:
            return state
    }
}

// Exports
export default getReducer;