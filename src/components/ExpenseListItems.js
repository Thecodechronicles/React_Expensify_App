import React from "react";
import { connect } from "react-redux";
// import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItems = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`} >
      <h1>{description}</h1>
    </Link>
    <p>
      <b>Amount:</b>
      {amount.toLocaleString('en-IN', { style: "currency", currency: "INR" })} <b>&nbsp;-&nbsp;</b> <b>Created At:</b>
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
    {/* <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button> */}
  </div>
);

// const mapStateToProps = (state) => (
//     {
//         expenses: 'abc'
//     }
// )

const ExpenseListItemsComp = connect()(ExpenseListItems);

export default ExpenseListItemsComp;
// export default ExpenseListItems;
