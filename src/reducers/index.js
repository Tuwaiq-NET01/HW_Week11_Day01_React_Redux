import counterReducer from "./counter"
import loggedReducer from './isLogged'
import contactlist from './contactlist'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
    contactlist,


})

export default allReducers;