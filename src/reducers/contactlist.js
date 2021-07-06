export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,

                }
            ]

        case "DELETING":
                state.splice(action.payload.index, 1)
                return [
                    ...state
                ]
        case "EDITING":
                state[action.index] = {
                    number: action.payload.number,
                    name: action.payload.name,
                }
                return state
        default:
            return state
    }
}