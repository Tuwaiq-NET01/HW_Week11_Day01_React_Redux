export default function contactlist(state = [], action) {
  switch (action.type) {
    case "CONTACT_ADDED":
      return [
        ...state,
        {
          id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
          number: action.payload.number,
          name: action.payload.name,
        },
      ];
    case "CONTACT_DELETE":
      return state.filter((x) => x.id !== action.payload.id);
    case "CONTACT_EDIT":
      const i = state.indexOf(action.payload.id);
      //   const edited = [...state];
      //   edited[index].name = action.payload.name;
      //   edited[index].number = action.payload.number;
      return state.map((item, index) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    default:
      return state;
  }
}
