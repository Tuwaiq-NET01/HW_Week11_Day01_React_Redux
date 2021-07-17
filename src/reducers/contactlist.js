export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,
                    isEdited: action.payload.isEdited
                }
            ]
        case "contactDeleted":
            return state.filter( (ele, index) => index !== action.payload )
        case "allowEdit":         
            state[action.payload].isEdited = true; return [...state]
        case "contactUpdated":
            state[action.payload.index] = action.payload.body; return [...state]
        default:
            return state
    }
}