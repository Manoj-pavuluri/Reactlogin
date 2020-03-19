
const initialSate = {
    email: "",
    password: "",
    error: [],
    userData:{}
}
const PostReducers = (state = initialSate, action) => {
    switch (action.type) {
        case "GET_EMIL":
            return {
                ...state,
                email: action.payload
            };
        case "GET_PASSWORD":
            return {
                ...state,
                password: action.payload
            };
        case "ERROR_MESSAGE":
            return {
                ...state,
                error: action.payload
            };
        case "USER_DATA":
            return {
                ...state,
                userData: action.payload
            };
        default:
            return state
    }

}

export default PostReducers;