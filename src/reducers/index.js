import counterReducer from './counter'
import contactReducer from './contact'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  contactList: contactReducer,
})

export default allReducers
