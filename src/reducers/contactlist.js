export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,

                }
            ]
            case "contactEdited":
            return state.map((item,i) => {

                if (i == action.index) {
                    return action.payload
                } else {
                    return item;
                }
            });
        case "delete":
            let arrCopy = [...state]
            arrCopy.splice(action.payload, 1)
            return arrCopy
        default:
            return state
    }
}