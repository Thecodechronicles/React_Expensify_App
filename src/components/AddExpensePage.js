import React from "react";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expenses</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  </div>
);

const matchDispatchToProps = (dispatch) => {
  console.log('dispatch_AddExpenses: ', dispatch);
  dispatch((thisDispatch) => {
    console.log('inside_callbackOf_thunk_dispatch: ', thisDispatch);
    thisDispatch({ type: 'ABC', prop: 'abc' });
  });
}

export default connect(undefined, matchDispatchToProps)(AddExpensePage);
