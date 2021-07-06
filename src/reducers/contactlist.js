export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name
                }
            ];
            case "removeContact":
                state.splice(action.payload.index, 1);
                return [...state];
            case "editContact":
                state[action.payload.index] = action.payload.phone;
                return [...state];
        default:
            return state
    }
}