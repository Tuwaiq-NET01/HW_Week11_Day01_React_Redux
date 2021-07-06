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

export const contactEdited = (index, obj) => {
    return {
        type: "contactEdited",
        payload: obj,
        index: index
    }
}

export const contactDeleted = (index) => {
    return {
        type: "contactDeleted",
        payload: index,

    }
}