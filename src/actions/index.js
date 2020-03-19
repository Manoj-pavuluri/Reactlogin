export const handleChange = (event) => {
    return {
        type: "GET_EMIL",
        payload: event
    }
}

export const handleChangePassword = (event) => {
    return {
        type: "GET_PASSWORD",
        payload: event
    }
}

export const errorMessage = (event) => {
    return {
        type: "ERROR_MESSAGE",
        payload: event
    }
}

export const userData = (usersData) => {
    return {
        type: "USER_DATA",
        payload: usersData
    }
}

