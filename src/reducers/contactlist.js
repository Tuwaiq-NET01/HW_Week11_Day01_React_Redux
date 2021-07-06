export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name
                }
            ]
            
            case "EDIT":
                state[action.index]  = {
                    phonenumber: action.payload.phonenumber,
                    name: action.payload.name
                }
                return state
            case "DELETE":
                let arr= [...state]
                arr.splice(action.payload,1)
                return arr
            default:
                return state
        }
    }
