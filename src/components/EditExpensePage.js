import React from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = (props) => {
    console.log('EditExpensePage Props: ', props)
    return (
        <div>Hello !! This is the Edit Page!
            <ExpenseForm
                onSubmit={(expense) => {
                    console.log('EditExpenses onSubmit expenses: ', expense);
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push("/");
                }}
                expense={props.expense}
            />
            <button
                onClick={() => {
                    props.dispatch(removeExpense({ id: props.expense.id }));
                    props.history.push("/");
                }}
            >
                Remove
            </button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);
