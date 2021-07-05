export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,
                }
            ]
        case "deleteItem":
            return state.filter(({id})=> id !==action.payload)

        case "editItem":
            return state.map((item,index)=> {
                if(item.id == action.payload.id){
                    return action.payload
                }
                else{
                    return item
                }
            })
        default:
            return state
    }
}