import React from "react";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = (props) => (
  <div>
    Add Expenses !!
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
