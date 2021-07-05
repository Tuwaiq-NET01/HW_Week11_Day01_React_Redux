import counterReducer from "./counter";
import logReducer from "./isLogged";
import { combineReducers } from "redux";
import ContactList from "./ContactList";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: logReducer,
    ContactList,

})

export default allReducers