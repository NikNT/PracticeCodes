export const noteReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_NOTES":
      return {
        notes: action.payload,
      };
    case "POST_NOTE":
      return {
        notes: [action.payload, ...state.notes],
      };

    case "DELETE_NOTE":
      return {
        notes: state.notes.filter((note) => note._id !== action.payload._id),
      };
    default:
      return state;
  }
};
