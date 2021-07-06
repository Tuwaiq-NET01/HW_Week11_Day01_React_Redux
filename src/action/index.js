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
export const contactEdit = (index,arg) => {
    return {
        type: "EDIT",
        payload: arg,
        index: index
    }
}

export const contactDelete = (index) => {
    return {
        type: "DELETE",
        payload: index
        
    }
}
