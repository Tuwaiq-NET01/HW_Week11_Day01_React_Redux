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
export const contactEdited = (arg) => {
  return {
    type: "contactEdited",
    payload: arg,
  };
};
export const contactDeleted = (arg) => {
  return {
    type: "contactDeleted",
    payload: arg,
  };
};
