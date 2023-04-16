import React from "react";
import { connect } from "react-redux";
import ExpenseListItems from "./ExpenseListItems";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div className="content-container">
    <h1>Expenses List</h1>
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Expenses</span>
        </div>
      ) : (
        props.expenses.map((expense) => {
          return (
            <ExpenseListItems
              key={expense.id}
              dispatch={props.dispatch}
              {...expense}
            />
          );
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
