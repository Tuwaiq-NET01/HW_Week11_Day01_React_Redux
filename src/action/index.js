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

export const deleteItem = (id)=>{
    return{
        type: "deleteItem",
        payload:id
    }
}

export const editItem = (arg)=>{
    return{
        type:"editItem",
        payload:arg
    }
}