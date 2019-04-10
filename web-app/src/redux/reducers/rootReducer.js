import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import { reducer as notifications } from 'react-notification-system-redux';
import formExtra from "./formExtra.reducer";

const initUserState = {
    email: "",
    password: "",
}
const initProfileBasicsState = {
    name: "",
    description: "",
    state: "",
    age: "",
    ethnicity: "",
    race: "",
    sex: "",
    height: "",
    weight: "",
};

export default combineReducers({
    formExtra,
    notifications,
    ...createForms({
        user: initUserState,
        profileBasics: initProfileBasicsState
    })
});
