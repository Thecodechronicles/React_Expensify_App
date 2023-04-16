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
            // description="ExpenseListItems_Props"
            />
          );
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  // mapStateToProps() will run every time the redux state changes from inside onStateChange function of this HOC, onStateChange will run for every store state change as it is given as a callback of store.subscribe function like this: store.subscribe(onStateChange)
  // console.log('connect State: ', state);
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList); // return 1. connect() then return 2. wrapWithConnect() after calling connectAdvanced() then return 3. Connect component as 'Class Connect extends Component' in function form

// console.log('Connected Expense List: ', ConnectedExpenseList);

export default ConnectedExpenseList;
