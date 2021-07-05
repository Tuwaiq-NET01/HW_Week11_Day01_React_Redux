
export const contactAdded = (arg) => {
    return {
        type: "contactAdded",
        payload: arg
    }
}
export const contactDeleted = (id) => {
    return {
        type: "contactDeleted",
        payload: id
    }
}
export const contactEdit = (index,obj) => {
    return {
        type: "contactEdit",
        payload: obj,
        index: index
    }
}