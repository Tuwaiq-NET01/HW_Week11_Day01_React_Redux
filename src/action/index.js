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
export const contactEdited = (index, obj) => {
    return {
        type: "contactEdited",
        payload: obj,
        index: index
    }
}