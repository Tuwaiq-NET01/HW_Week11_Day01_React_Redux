export const increment = (arg) => {
  return {
    type: "INCREMENT", // this call reducers method
    payload: arg,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT", // this call reducers method
  };
};
export const contactAdded = (arg) => {
  return {
    type: "CONTACT_ADDED",
    payload: arg,
  };
};
export const Delete = (arg) => {
  return {
    type: "DELETE",
    payload: arg,
  };
};
export const EditContact = (arg) => {
  return {
    type: "EDIT",
    payload: arg,
  };
};

export const toggle = (arg) => {
  return {
    type: "toggle",
  };
};
