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
            let updatedState = [...state]
            updatedState.splice(action.payload, 1)
            return updatedState

        case "contactEdited":
            return state.map((value,index) => {
                if (index == action.index) {
                    return action.payload
                } else {
                    return value;
                }
            });
        default:
            return state
    }
}