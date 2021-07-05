
export default function ContactList(state = [], action) {
    switch (action.type) {
        case 'contactAdded':

            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,
                }
            ];
        case 'contactDeleted':
            return [
                ...state.filter((i) => i !== action.payload)
            ];
        case 'contactEdited':
            
             state[action.index] = {
                number: action.payload.number,
                name: action.payload.name,
             }
             return [
                 ...state 
            ];
        default:
            return state
    }
}