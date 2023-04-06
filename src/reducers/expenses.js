const expenseDefaultState = [];

const expenseReducer = (state = expenseDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((expenseItem) => expenseItem.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expenseItem) => {
        if (expenseItem.id === action.id) {
          return {
            ...expenseItem,
            ...action.updates,
          };
        } else {
          return expenseItem;
        }
      });
    default:
      return state;
  }
};

export default expenseReducer;
