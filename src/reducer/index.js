import counterReducer from "./counter";
import logReducer from "./isLogged"
import conctactLists from "./contactList";
import Toggle from "./isOn"
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer, 
    isLogged:logReducer,
    //conctactLists to just modify the name of the importee
    contactList:conctactLists,
    toggle:Toggle


})
export default allReducers