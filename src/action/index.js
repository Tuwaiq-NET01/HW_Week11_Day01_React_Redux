export const increment = (arg) => {
    return {
        type: 'INCREMENT', // this call reducers method
        payload: arg,
    };
};
export const decrement = () => {
    return {
        type: 'DECREMENT' // this call reducers method
    };
};
export const contactAdded = (arg) => {
    return {
        type: "contactAdded",
        payload: arg
    }
}
export const contactEdit = (obj) => {
    return {
        type: "EDIT",
        // index: index,
        payload: obj
    }
}
export const contactDelete = (index) => {
    return {
        type: "DEL",
        payload: index
    }
}