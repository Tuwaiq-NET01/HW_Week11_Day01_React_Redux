export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,
                }
            ]

        case "contactDeleted":
            return [...state.filter(({ name }, index) => index !== action.payload)]

        case "contactEdited":
            console.log(">>>>>>", action);
            state[action.index] = {
                number: action.payload.number,
                name: action.payload.name,
            }
            return state

        default:
            return state
    }
}