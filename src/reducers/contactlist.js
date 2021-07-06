export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,

                }
            ]
        case "Edit":
            return state[action.index] = {
                number: action.payload.number,
                name: action.payload.name
            }
        case "delete":
            let arrCopy = [...state]
            arrCopy.splice(action.payload, 1)
            return arrCopy
        default:
            return state
    }
}