export const increment = (arg) => {
    return {
        type: 'INCREMENT', 
        payload: arg,
    };
};
export const decrement = () => {
    return {
        type: 'DECREMENT' 
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
export const editing = (index,obj) => {
    return {
        type: "EDITING",
        payload: obj,
        index: index
       
    }
}