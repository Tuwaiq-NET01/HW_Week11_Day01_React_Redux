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
    case "contactEdited":
      console.log(state);
      state.splice(action.payload.index, 1, {
        number: action.payload.number,
        name: action.payload.name,
      });
      return [...state];
    case "contactDeleted":
      state.splice(action.payload.index, 1);
      return [...state];
    default:
      return state;
  }
}
