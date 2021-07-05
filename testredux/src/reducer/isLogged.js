const isLogged = (state = false, action) => {
    switch(action.type){
        case "log": 
        return !state
        default: 
        return state
    }
}

export default isLogged