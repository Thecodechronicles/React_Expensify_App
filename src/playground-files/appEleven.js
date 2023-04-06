import { createStore, combineReducers } from "redux";
import uuid from "uuid";

console.log("app is running !");

// Reducers
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

const filterDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.textFilter,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// action generators
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  textFilter: text,
});

const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

const setStartDate = (date = "") => ({
  type: "SET_START_DATE",
  startDate: date,
});

const setEndDate = (date = "") => ({
  type: "SET_END_DATE",
  endDate: date,
});

// Store
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  console.log("Hello Ji !");
})();

store.subscribe(() => {
  console.log("Hi Ji !");
});

// dispatch actions
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("Rent"));
store.dispatch(setTextFilter());

store.dispatch(sortByDate());
store.dispatch(sortByAmount());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate());
