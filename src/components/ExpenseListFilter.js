import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";
// import RandomComp from './RandomComp';

const ExpenseListFilter = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      // value={'abc'}
      onChange={(e) => {
        e.preventDefault();
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === "date") {
          console.log("date");
          props.dispatch(sortByDate());
        } else if (e.target.value === "amount") {
          console.log("amount");
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
    {/* <RandomComp description='randomComponent' /> */}
  </div>
);

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const ExpenseListFilterComp = connect(mapStateToProps)(ExpenseListFilter);

export default ExpenseListFilterComp;
