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
export const Edit = (myindex,obj) => {
    return {
        type: "Edit",
        payload: obj,
        index: myindex
    }
}

export const Delete = (e) => {
    return {
        type: "delete",
        payload: e,

    }
}