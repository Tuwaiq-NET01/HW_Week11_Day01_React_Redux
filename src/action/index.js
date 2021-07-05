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
    type: "contactAdded",
    payload: arg,
  };
};

export const deleteContact = (arg) => {
  return {
    type: "deleteContact",
    payload: arg,
  };
};

export const editContact = (index, arg) => {
  return {
    type: "editContact",
    index: index,
    payload: arg,
  };
};
