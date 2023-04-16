import React from "react";
import { connect } from "react-redux";
// import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItems = ({ dispatch, id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`} >
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{amount.toLocaleString('en-IN', { style: "currency", currency: "INR" })}</h3>
  </Link>
);

// const mapStateToProps = (state) => (
//     {
//         expenses: 'abc'
//     }
// )

const ExpenseListItemsComp = connect()(ExpenseListItems);

export default ExpenseListItemsComp;
// export default ExpenseListItems;
