export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,

                }
            ]
        case "EDIT":
            state[action.index]  = {
                number: action.payload.number,
                name: action.payload.name,
            }
            return state
        case "DELETE":
            let arrCopy= [...state]
            arrCopy.splice(action.payload,1)
            return arrCopy
        default:
            return state
    }
}