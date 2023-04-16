import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoute from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// store
const store = configureStore();

// dispatch actions
const expenseOne = store.dispatch(
  addExpense({ description: "Water Bill", amount: 100, createdAt: 11000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Gas Bill", amount: 300, createdAt: 5000 })
);

const Jsx = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
);

let appRoot = document.getElementById("reactApp");

ReactDOM.render(<Jsx />, appRoot);
