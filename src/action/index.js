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
export const contactDeleted = (arg) => {
    return {
        type: "contactDeleted",
        payload: arg
    }
}

export const allowEdit = (arg) => {
    return {
        type: "allowEdit",
        payload: arg
    }
}

export const contactUpdated = (index, body) => {
    return {
        type: "contactUpdated",
        payload: {
            index,
            body,
        }
    }
}