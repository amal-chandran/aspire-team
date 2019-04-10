export const actions = {
    SET_STATE: "SET_STATE"
}


const setExtra = (payload) => {
    return {
        type: actions.SET_STATE,
        payload
    }
}

export const actionCreator = {
    setExtra
}