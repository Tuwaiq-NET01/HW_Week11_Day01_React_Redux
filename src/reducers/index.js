
import counterReducer from "./counter"
import loggedReducer from './isLogged'
import contactlist from './contactlist'
import isOn from './isOn'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
    contactlist,
    isOn, 

})

export default allReducers;