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


export const contactEdited = (arg,selectindex) => {
    return {
        type: "contactEdited",
        payload: arg,
        index: selectindex


    }
}

export const Delete = (e) => {
    return {
        type: "delete",
        payload: e,

    }
}