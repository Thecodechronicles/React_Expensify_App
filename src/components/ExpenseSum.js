import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import expenseTotal from "../selectors/expenseTotal";

const ExpenseSum = ({ expenseCount, expenseSum }) => {
    const countString = expenseCount == 1 ? 'expense' : 'expenses';
    const expenseSumDetail = expenseSum != undefined ? expenseSum : 0;
    console.log('expenseSum: ', expenseSum);
    return (
        <div>
            <h1>Viewing {expenseCount} {countString} totaling {
                expenseSumDetail
                    .toLocaleString('en-IN', { style: "currency", currency: "INR" })
            }</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    // console.log('expenseTotal: ', expenseTotal(visibleExpenses));
    return {
        expenseCount: visibleExpenses.length,
        expenseSum: expenseTotal(visibleExpenses)
    }
}

const ExpenseSumComp = connect(mapStateToProps)(ExpenseSum);

export default ExpenseSumComp;