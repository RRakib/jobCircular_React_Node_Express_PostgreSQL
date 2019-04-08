// Initial State
const init = {
    data : {},
    errors : []
}

// Reducer Setup
const getReducer = (state = init , action) => {
    console.log(state)
    switch(action.type){
        case "GET_DATA":
            return{
                data : action.payload.data
            }
        case "POST DATA":
            return{
                data : action.payload.data
            }
        case "ERRORS":
            return{
                errors : action.payload.data
            }
        default:
            return state
    }
}

// Exports
export default getReducer;