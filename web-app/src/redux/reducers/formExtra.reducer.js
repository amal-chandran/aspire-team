import { actions } from "./../actions/formExtra.actions";

let initalState = {
    avatar: ""
}

export default (state = initalState, action) => {
    switch (action.type) {
        case actions.SET_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}