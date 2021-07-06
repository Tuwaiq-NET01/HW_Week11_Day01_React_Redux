export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,
                }
            ]
        case "contactRemoved":
            let arrCopy = [...state]
            arrCopy.splice(action.payload, 1)
            return arrCopy
        case "contactEdited":
            state[action.index] = {
                number: action.payload.number,
                name: action.payload.name,
            }
            return state
        default:
            return state
    }
}
