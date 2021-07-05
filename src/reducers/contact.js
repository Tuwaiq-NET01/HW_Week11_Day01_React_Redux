const contactList = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      state.push(action.payload)
      return state
    case 'EDIT':
      return state.map((item) => {
        if (item === action.payload.record) return action.payload.newRecord
        return item
      })
    case 'DELETE':
      return state.filter((item) => {
        return item !== action.payload
      })
    default:
      return state
  }
}
export default contactList
