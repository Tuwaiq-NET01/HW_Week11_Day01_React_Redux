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

export const removeContact = (arg) => {
    return {
        type: "removeContact",
        payload: arg
    }
}

export const editContact = (arg) => {
    return {
        type: "editContact",
        payload: arg
    }
}