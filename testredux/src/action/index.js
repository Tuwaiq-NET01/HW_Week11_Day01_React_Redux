
//action
export const increment = (number) => {
    return {
        type: "INCREMENT",
        payload: number
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const isLogged = () => {
    return {
        type: "log"
    }
}
export const ContactAddded = (arg) => {
    return {
        type: "contactAdded",
        payload: arg
    }
}

export const ContactDeleted = (id) => {
    return {
        type: "contactDeleted",
        payload: id
    }
}

export const ContactEdited = (index,id) => {
    return {
        type: "contactEdited",
        payload: id,
        index: index
    }
}