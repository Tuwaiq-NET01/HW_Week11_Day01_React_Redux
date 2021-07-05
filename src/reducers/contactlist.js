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
      let arrCopy = [...state];
      copy.splice(action.payload, 1);
      return arrCopy;
    case "editContact":
      state[action.index] = {
        number: action.payload.number,
        name: action.payload.name,
      };
      console.log(state);
      return state;
    default:
      return state;
  }
}
