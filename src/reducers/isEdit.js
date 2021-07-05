const isEdit = (state = false, action)=>{
    switch (action.type){
        case "editItem":
            return !state
        default:
            return state
    }
}

export default isEdit;