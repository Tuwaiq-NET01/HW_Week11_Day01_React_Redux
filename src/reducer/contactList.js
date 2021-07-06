
export default function conctactLists(state = [],action){
    switch(action.type){
        case "CONTACT_ADD" : return[
            ...state, {number : action.payload.number, name : action.payload.name}]
        
        case "CONTACT_EDIT":
                state.splice(action.payload.index, 1, {
                    number: action.payload.number,
                    name: action.payload.name
                })
                return [
                    ...state
                ]
        case "CONTACT_DELETE" :
                state.splice(action.payload.index, 1)
                return [
                    ...state
                ]
        
        default: return state
    }
}