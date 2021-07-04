const counter = (state = null, action) => {
    switch (action.type) {
        case "INCREMENT": // this called from the action
            // return state + 1
            return state + action.payload;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};
export default counter;