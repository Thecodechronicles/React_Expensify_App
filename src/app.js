import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoute from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// store
const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// dispatch actions
const expenseOne = store.dispatch(
  addExpense({ description: "Water Bill", amount: 100, createdAt: 11000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Gas Bill", amount: 300, createdAt: 5000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

// setTimeout(() => {
//     store.dispatch(setTextFilter('Bill'));
//     store.dispatch(sortByAmount());
//     // store.dispatch(sortByDate());
// }, 3000);

const Jsx = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
);

let appRoot = document.getElementById("reactApp");

ReactDOM.render(<Jsx />, appRoot);
