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

export const deleting = (arg) => {
    return {
        type: "DELETING",
        payload: arg
    }
}
export const editing = (obj) => {
    return {
        type: "EDITING",
        payload: obj,
       
    }
}