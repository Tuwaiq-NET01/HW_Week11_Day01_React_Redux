export default function contactlist(state = [], action) {
  switch (action.type) {
    case "contactAdded":
      return [
        ...state,
        {
          number: action.payload.number,
          name: action.payload.name,
        },
      ];
    case "deleteContact":
      let deleteCopy = [...state];
      deleteCopy.splice(action.payload, 1);
      return deleteCopy;
    case "editContact":
      let editCopy = [...state];
      editCopy[action.index] = {
        number: action.payload.number,
        name: action.payload.name,
      };
      return editCopy;
    default:
      return state;
  }
}
