export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,

                }
            ]
        case "EDIT": 
        return state.map((item)=> {
            if( item.id == action.payload.id) {
              return action.payload
            } else {
              return item;
            }
          });

        
        case "DEL": 
        let arr = [...state]
        arr.splice(action.payload,1)
        return arr

        default:
            return state
    }
}