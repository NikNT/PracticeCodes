export const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        tasks: action.payload,
      };

    case "CREATE_TASK":
      return {
        tasks: [action.payload, ...state.tasks],
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };

    case "UPDATE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };

    default:
      return state;
  }
};
