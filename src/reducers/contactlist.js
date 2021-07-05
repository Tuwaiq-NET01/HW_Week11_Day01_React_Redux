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

                console.log(state);
                return state.filter(({ name },index) => index !== action.payload);
                
        case "contactEdited":   
       
        return state.map(
            (content, i) => i === action.payload.index ?({...content, number: action.payload.number,
                                                   name: action.payload.name
            } ) 
                                    : content)

        default:
            return state
    }
}