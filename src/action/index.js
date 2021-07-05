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
export const contactDelete = (arg) => {
  return {
    type: "CONTACT_DELETE",
    payload: arg,
  };
};
export const contactEdit = (arg) => {
  return {
    type: "CONTACT_EDIT",
    payload: arg,
  };
};

export const toggle = (arg) => {
  return {
    type: "toggle",
  };
};
