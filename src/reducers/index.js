import loggedReducer from './isLogged'
import contactlist from './contactlist'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    logged: loggedReducer,
    contactlist,
})

export default allReducers;