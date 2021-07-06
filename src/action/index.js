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

export const toggle =()=>{
    return{
        type: "toggle",
        
    }
}
export const contactDeleted = (Id) => {
    return {
        type: "contactDeleted",
        payload: Id
    }
}
export const contactEdit = (index,object) => {
    return {
        type: "contactEdit",
        payload: object,
        index: index
    }
}