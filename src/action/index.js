export const contactAdded = (arg) => {
    return {
        type: "contactAdded",
        payload: arg
    }
}
export const contactRemoved = (arg) => {
    return {
        type: "contactRemoved",
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