export const increment=(number) => {
    return{
        type: "INCREMENT",
        payload: number
     }
    }
    
    export const decrement=() => {
    return{
        type: "DECREMENT"
     }
    }

    export const log = () =>{
        return{
            type: "LOGGED"
         }

    }

    export const contactAdd =(arg) => {
        return{
            type:"CONTACT_ADD"
            , payload: arg
        }
    }
    export const contactEdit =(arg) => {
        return{
            type:"EDIT_CONTACT"
            , payload: arg
        }
    }
    export const contactDelete =(arg) => {
        return{
            type:"DELETE_CONTACT"
            , payload: arg
        }
    }

    export const toggle =() => {
        return{
            type:"TOGGLE"
        }
    }
    