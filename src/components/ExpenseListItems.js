import React from "react";
import { connect } from "react-redux";
// import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";

const ExpenseListItems = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`} >
      <h1>{description}</h1>
    </Link>
    <p>
      <b>Amount:</b>
      {amount} <b>&nbsp;-&nbsp;</b> <b>Created At:</b>
      {createdAt}
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
