import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getVisibleExpenses from "../selectors/expenses";
import expenseTotal from "../selectors/expenseTotal";

const ExpenseSum = ({ expenseCount, expenseSum }) => {
    const countString = expenseCount == 1 ? 'expense' : 'expenses';
    const expenseSumDetail = expenseSum != undefined ? expenseSum : 0;
    console.log('expenseSum: ', expenseSum);
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {countString} totaling <span>{
                    expenseSumDetail
                        .toLocaleString('en-IN', { style: "currency", currency: "INR" })
                }</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">
                        Add Expense
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseSum: expenseTotal(visibleExpenses)
    }
}

const ExpenseSumComp = connect(mapStateToProps)(ExpenseSum);

export default ExpenseSumComp;