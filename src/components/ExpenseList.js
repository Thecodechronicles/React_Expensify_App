import React from "react";
import { connect } from "react-redux";
import ExpenseListItems from "./ExpenseListItems";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expenses List</h1>
    {props.expenses.map((expense) => {
      return (
        <ExpenseListItems
          key={expense.id}
          dispatch={props.dispatch}
          {...expense}
        // description="ExpenseListItems_Props"
        />
      );
    })}
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
